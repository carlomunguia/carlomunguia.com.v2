<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { storeValue } from '../store';
	import { AppShell, AppBar, AppRail, AppRailTile } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>(zen-of (carlo munguia))</AppBar>
	</svelte:fragment>
	<AppRail selected={storeValue}>
		<svelte:fragment slot="lead" />
		<AppRailTile title="Projects" value={1}>Projects</AppRailTile>
		<svelte:fragment slot="trail" />
		<AppRailTile title="Music" value={1}>Music</AppRailTile>
		<AppRailTile title="Resume" value={1}>Resume</AppRailTile>
	</AppRail>
</AppShell>
