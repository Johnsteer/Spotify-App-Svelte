
<div class="dashboard">
    <!-- Header section -->
    <header class="header">
        <h1>Spotify Insights Dashboard</h1>
        <p>User: [Username]</p>
    </header>

    <!-- Main content area -->
    <main class="main-content">
        <!-- Liked Songs section -->
        <section class="card liked-songs">
            <h2>Liked Songs</h2>
            <p>Total: [Number of liked songs]</p>
            <div class="chart-placeholder">
                [Chart showing top genres of liked songs]
            </div>
        </section>

        <!-- Audio Features section -->
        <section class="card audio-features">
            <h2>Audio Features</h2>
            <div class="chart-placeholder">
                [Radar chart showing average audio features]
            </div>
        </section>

        <!-- Playlists section -->
        <section class="card playlists">
            <h2>Playlists</h2>
            <p>Total: [Number of playlists]</p>
            <ul class="playlist-list">
                <li>[Playlist 1]</li>
                <li>[Playlist 2]</li>
                <li>[Playlist 3]</li>
            </ul>
        </section>

        <!-- Top Artists section -->
        <section class="card top-artists">
            <h2>Top Artists</h2>
            <ol class="artist-list">
                <li>[Artist 1]</li>
                <li>[Artist 2]</li>
                <li>[Artist 3]</li>
            </ol>
        </section>

        <!-- Listening History section -->
        <section class="card listening-history">
            <h2>Listening History</h2>
            <div class="chart-placeholder">
                [Line chart showing listening trends over time]
            </div>
        </section>

        <!-- Recommendations section -->
        <section class="card recommendations">
            <h2>Recommendations</h2>
            <ul class="recommendation-list">
                <li>[Recommended Song/Artist 1]</li>
                <li>[Recommended Song/Artist 2]</li>
                <li>[Recommended Song/Artist 3]</li>
            </ul>
        </section>
    </main>

    <!-- Footer section -->
    <footer class="footer">
        <p>HTML/CSS courtesy of our friend Claude :P</p>
    </footer>
</div>



<style>
    :root {
        --spotify-green: #1DB954;
        --spotify-black: #191414;
        --spotify-white: #FFFFFF;
        --spotify-gray: #B3B3B3;
        --card-bg: #282828;
        --font-family: 'Circular', Arial, sans-serif;
    }

    .dashboard {
        display: grid;
        grid-template-areas:
            "header header"
            "main main"
            "footer footer";
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
    }

    /* Header styles */
    .header {
        grid-area: header;
        background-color: var(--spotify-black);
        padding: 20px;
        text-align: center;
    }

    .header h1 {
        color: var(--spotify-green);
        margin-bottom: 10px;
    }

    /* Main content area styles */
    .main-content {
        grid-area: main;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        padding: 20px;
    }

    /* Card styles for each section */
    .card {
        background-color: var(--card-bg);
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .card h2 {
        color: var(--spotify-green);
        margin-top: 0;
    }

    /* Placeholder styles for charts and lists */
    .chart-placeholder {
        background-color: var(--spotify-gray);
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--spotify-black);
        font-weight: bold;
        margin-top: 10px;
    }

    .playlist-list, .artist-list, .recommendation-list {
        list-style-type: none;
        padding: 0;
    }

    .playlist-list li, .artist-list li, .recommendation-list li {
        background-color: rgba(255, 255, 255, 0.1);
        margin-bottom: 5px;
        padding: 10px;
        border-radius: 4px;
    }

    /* Footer styles */
    .footer {
        grid-area: footer;
        background-color: var(--spotify-black);
        color: var(--spotify-gray);
        text-align: center;
        padding: 10px;
    }

    /* Responsive design adjustments */
    @media (max-width: 768px) {
        .main-content {
            grid-template-columns: 1fr;
        }
    }
</style>

