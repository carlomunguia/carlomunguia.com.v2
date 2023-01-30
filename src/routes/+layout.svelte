<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { tileVal } from '../store';
	import { AppShell, AppBar, AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<slot slotPageContent="pageContent" />
	<svelte:fragment slot="header">
		<AppBar>
			<strong class="text-3xl uppercase"
				><span class="gradient-heading">(zen-of</span>
				<span class="gradient-heading">(carlo</span>
				<span class="gradient-heading">munguia))</span></strong
			>
			<LightSwitch class="float-right" />
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={tileVal}>
			<AppRailTile tag="a" href="/projects" title="Projects" value={1}>Projects</AppRailTile>
			<AppRailTile tag="a" href="/music" title="Music" value={2}>Music</AppRailTile>
			<AppRailTile tag="a" href="/resume" title="Resume" value={3}>Resume</AppRailTile>
		</AppRail>
	</svelte:fragment>
</AppShell>
