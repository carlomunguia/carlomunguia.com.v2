<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { tileVal } from '../store';
	import { AppShell, AppBar, AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Hamburger from 'svelte-hamburgers';
	import { fly, scale } from 'svelte/transition';
  import { quadOut } from 'svelte/easing';

	let open: any;

	let appTile: any[] = [];

</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css" />
</svelte:head>


<AppShell>
	<svelte:fragment slot="header">
		<AppBar data-menu="mMenu">
			<Hamburger bind:open --color="white" />
			<strong class="text-3xl uppercase"
				><span class="gradient-heading">(zen-of</span>
				<span class="gradient-heading">(carlo</span>
				<span class="gradient-heading">munguia))</span></strong
			>
			<LightSwitch class="float-right mt-4" />
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={tileVal}>
			{#if open}
					<div transition:fly={{ y: -15, delay: 50 }}>
						<AppRailTile tag="a" href="/about" title="About" value={1}>About</AppRailTile>
						<AppRailTile tag="a" href="/projects" title="Projects" value={2}>Projects</AppRailTile>
						<AppRailTile tag="a" href="/music" title="Music" value={3}>Music</AppRailTile>
						<AppRailTile tag="a" href="/resume" title="Resume" value={4}>Resume</AppRailTile>
					</div>
			{/if}
		</AppRail>
	</svelte:fragment>
	<slot slotPageContent="pageContent" />
</AppShell>
