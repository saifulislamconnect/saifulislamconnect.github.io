import { createApp, ref, computed, watch } from "vue";
import { projects, findProject, allTech } from "./projects.js";

// Hash routing keeps GitHub Pages happy: no 404 fallback needed for deep links.
const route = ref(parseHash());

function parseHash() {
    const [, name = "", slug = ""] = location.hash.replace(/^#/, "").split("/");
    return name === "project" && slug ? { name: "project", slug } : { name: "home" };
}

window.addEventListener("hashchange", () => {
    route.value = parseHash();
    window.scrollTo({ top: 0, behavior: "instant" });
});

const ICONS = {
    external: '<path d="M14 4h6v6"/><path d="M10 14 20 4"/><path d="M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"/>',
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    back: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
};

const Icon = {
    props: { name: String },
    template: `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" v-html="paths"></svg>`,
    computed: { paths() { return ICONS[this.name]; } },
};

const ThemeToggle = {
    components: { Icon },
    setup() {
        const read = () => { try { return localStorage.getItem("theme"); } catch { return null; } };
        const systemDark = matchMedia("(prefers-color-scheme: dark)");
        const theme = ref(read() ?? (systemDark.matches ? "dark" : "light"));
        watch(theme, (t) => {
            document.documentElement.dataset.theme = t;
            try { localStorage.setItem("theme", t); } catch {}
        }, { immediate: true });
        return { theme, toggle: () => (theme.value = theme.value === "dark" ? "light" : "dark") };
    },
    template: `
        <button class="icon-btn" type="button" @click="toggle"
                :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'">
            <Icon :name="theme === 'dark' ? 'sun' : 'moon'" />
        </button>`,
};

const ProjectCard = {
    components: { Icon },
    props: { project: Object, index: Number },
    setup: () => ({ allTech }),
    template: `
        <a class="card" :href="'#/project/' + project.slug" :style="{ '--i': index }">
            <div class="card-media">
                <img :src="project.img" :alt="project.title + ' screenshot'" loading="lazy">
                <span class="badge">{{ project.category }}</span>
            </div>
            <div class="card-body">
                <h3>{{ project.title }} <small v-if="project.subtitle">{{ project.subtitle }}</small></h3>
                <p>{{ project.tagline }}</p>
                <ul class="chips">
                    <li v-for="t in allTech(project).slice(0, 4)" :key="t">{{ t }}</li>
                    <li v-if="allTech(project).length > 4" class="more">+{{ allTech(project).length - 4 }}</li>
                </ul>
                <span class="card-cta">View details <Icon name="arrow" /></span>
            </div>
        </a>`,
};

const HomeView = {
    components: { ProjectCard, Icon },
    setup() {
        const query = ref("");
        const category = ref("All");
        const categories = ["All", ...new Set(projects.map((p) => p.category))];
        const techCount = new Set(projects.flatMap(allTech)).size;

        const filtered = computed(() => {
            const q = query.value.trim().toLowerCase();
            return projects.filter((p) =>
                (category.value === "All" || p.category === category.value) &&
                (!q || [p.title, p.subtitle, p.tagline, p.category, ...allTech(p)]
                    .some((s) => s?.toLowerCase().includes(q))));
        });

        return { query, category, categories, filtered, total: projects.length, techCount };
    },
    template: `
        <section class="hero">
            <p class="eyebrow">Portfolio</p>
            <h1>Things I've built<span class="accent">.</span></h1>
            <p class="lead">
                A collection of web apps by <a href="https://github.com/saifulislamconnect" target="_blank" rel="noopener">Saiful Islam</a>
                - from AI exam simulators to Bengali reading rooms and everyday utilities.
            </p>
            <dl class="stats">
                <div><dt>Live apps</dt><dd>{{ total }}</dd></div>
                <div><dt>Technologies</dt><dd>{{ techCount }}</dd></div>
                <div><dt>Categories</dt><dd>{{ categories.length - 1 }}</dd></div>
            </dl>
        </section>

        <section class="toolbar" aria-label="Filter projects">
            <label class="search">
                <Icon name="search" />
                <input v-model="query" type="search" placeholder="Search by name or technology…" aria-label="Search projects">
            </label>
            <div class="filters" role="group" aria-label="Category">
                <button v-for="c in categories" :key="c" type="button"
                        :aria-pressed="category === c" @click="category = c">{{ c }}</button>
            </div>
        </section>

        <section class="grid" aria-live="polite">
            <ProjectCard v-for="(p, i) in filtered" :key="p.slug" :project="p" :index="i" />
            <p v-if="!filtered.length" class="empty">No projects match “{{ query }}”.</p>
        </section>`,
};

const ProjectView = {
    components: { Icon },
    props: { slug: String },
    setup(props) {
        const project = computed(() => findProject(props.slug));
        const neighbours = computed(() => {
            const i = projects.findIndex((p) => p.slug === props.slug);
            const n = projects.length;
            return { prev: projects[(i - 1 + n) % n], next: projects[(i + 1) % n] };
        });
        const host = (url) => new URL(url).host;
        return { project, neighbours, host };
    },
    template: `
        <article v-if="project" class="detail">
            <a class="back" href="#/"><Icon name="back" /> All projects</a>

            <header class="detail-head">
                <span class="badge static">{{ project.category }}</span>
                <h1>{{ project.title }} <small v-if="project.subtitle">{{ project.subtitle }}</small></h1>
                <p class="lead">{{ project.tagline }}</p>
                <div class="actions">
                    <a class="btn primary" :href="project.url" target="_blank" rel="noopener">
                        Visit {{ host(project.url) }} <Icon name="external" />
                    </a>
                    <a v-if="project.repo" class="btn" :href="project.repo" target="_blank" rel="noopener">
                        <Icon name="github" /> Source code
                    </a>
                </div>
            </header>

            <a class="shot" :href="project.url" target="_blank" rel="noopener">
                <img :src="project.img" :alt="project.title + ' screenshot'">
            </a>

            <div class="detail-body">
                <section class="panel objective">
                    <h2>Objective</h2>
                    <p>{{ project.objective }}</p>
                    <h2>Key features</h2>
                    <ul class="features">
                        <li v-for="f in project.features" :key="f"><Icon name="check" />{{ f }}</li>
                    </ul>
                </section>

                <aside class="panel stack">
                    <h2>Tech stack</h2>
                    <div v-for="(items, group) in project.stack" :key="group" class="stack-group">
                        <h3>{{ group }}</h3>
                        <ul class="chips">
                            <li v-for="t in items" :key="t">{{ t }}</li>
                        </ul>
                    </div>
                </aside>
            </div>

            <nav class="pager" aria-label="More projects">
                <a :href="'#/project/' + neighbours.prev.slug">
                    <span>Previous</span><strong><Icon name="back" /> {{ neighbours.prev.title }}</strong>
                </a>
                <a :href="'#/project/' + neighbours.next.slug" class="next">
                    <span>Next</span><strong>{{ neighbours.next.title }} <Icon name="arrow" /></strong>
                </a>
            </nav>
        </article>

        <section v-else class="not-found">
            <h1>Project not found</h1>
            <a class="btn primary" href="#/"><Icon name="back" /> Back to all projects</a>
        </section>`,
};

const App = {
    components: { HomeView, ProjectView, ThemeToggle },
    setup() {
        watch(route, (r) => {
            const p = r.name === "project" && findProject(r.slug);
            document.title = p ? `${p.title} - Saiful Islam` : "Saiful Islam - Projects";
        }, { immediate: true });
        return { route, year: new Date().getFullYear() };
    },
    template: `
        <header class="topbar">
            <a class="brand" href="#/"><span class="logo">SI</span> Saiful Islam</a>
            <nav>
                <a href="https://github.com/saifulislamconnect" target="_blank" rel="noopener">GitHub</a>
                <ThemeToggle />
            </nav>
        </header>
        <main>
            <ProjectView v-if="route.name === 'project'" :key="route.slug" :slug="route.slug" />
            <HomeView v-else />
        </main>
        <footer class="footer">© {{ year }} Saiful Islam · Built with Vue</footer>`,
};

createApp(App).mount("#app");
