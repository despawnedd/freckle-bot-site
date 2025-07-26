<script lang="ts">
    import "material-symbols";

    let { icon, text, href, color1, color2, color3 }: {
        icon: string, // svg
        text: string,
        href: string,
        color1: string,
        color2: string,
        color3: string
    } = $props();
</script>

<a {href} id="main" style="background: linear-gradient(180deg, {color1} 0%, {color2} 16%, {color3} 34%);">
    <span id="leftIcon" class="material-symbols-outlined" aria-hidden="true">{icon}</span>
    <span id="text">{text}</span>
    <span id="rightIcon" class="material-symbols-outlined" aria-hidden="true">keyboard_arrow_right</span>
</a>

<style>
    a {
        text-decoration: none;
    }
    #main {
        height: 4rem;
        padding-left: 1rem;
        padding-right: 1rem;
        display: flex;
        justify-items: center;
        align-items: center;
        column-gap: 0.5rem;
        border: none;
        filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.5));
        border-radius: 16px;
        font-size: x-large;
        transition: 0.25s;
        user-select: none;
    }
    #main:hover {
        cursor: pointer;
        transform: translateY(-2px);
        filter: drop-shadow(0 0 22px rgba(0, 0, 0, 0.4));
        scale: 1.01;
    }
    #main:active {
        cursor: pointer;
        transform: translateY(2px);
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.6));
        scale: 0.99;
    }
    span {
        display: block;
        color: white;
    }
    #text {
        font-weight: 500;
    }
    #rightIcon {
        transform: scale(1) translateX(0.25rem);
    }
    .material-symbols-outlined {
        font-size: 30pt;
    }
</style>
