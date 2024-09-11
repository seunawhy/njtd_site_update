<template>
    <div>
        <!-- Desktop Menu -->
        <header class="hidden xl:block lg:block">
            <section class="page-meta navy-blue white-text">
                <div class="layout full-height">
                    <div class="flex">
                        <!-- <template v-for="(info, ix) in siteInfo"> -->
                            <div  v-for="(info, ix) in siteInfo" class="flex mr-10 text-xs" :key="`meta__info__${ix}`">
                                <span class="iconify text-xl" :data-icon="`entypo:${info.icon}`"></span>
                                <span class="ml-2">{{ info.data }}</span>
                            </div>
                        <!-- </template> -->
                    </div>
                </div>
            </section>

            <div class="site-title blue">
                <div class="layout flex items-center content-start full-height">
                    <g-image src="/img/njtd_logo.png" style="height: 100px;" />
                    <div class="ml-8">
                        <h1 class="white-text font-bold text-2xl">
                            Nigerian Journal of Technological Development
                        </h1>
                        <h6 class="white-text opacity-75">
                            {{ tagLine }}
                        </h6>
                    </div>
                </div>
            </div>

            <nav class="menu-list navy-blue white-text">
                <div class="layout full-height">
                    <div class="flex items-center justify-between h-full">
                        <ul class="m-0 full-height flex items-center content-start main-menu">
                            <li v-for="menuitem in menu" :key="menuitem.route" class="menuitem relative">
                                <g-link :to="menuitem.route" class="px-4 block">
                                    {{ menuitem.name }}
                                    <i
                                        class="iconify text-md"
                                        data-icon="entypo:chevron-small-down"
                                        v-if="menuitem.dropdown">
                                    </i>
                                </g-link>

                                <ul v-if="menuitem.dropdown" class="hidden absolute navy-blue left-0 shadow-2xl pt-5">
                                    <li v-for="submenu in menuitem.dropdown" :key="submenu.route"
                                        class="">
                                        <g-link :to="submenu.route" class="block px-4 py-2">
                                            {{ submenu.name }}
                                        </g-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <search />
                    </div>
                </div>
            </nav>
        </header>

        
        <!-- Mobile Menu -->
        <header class="block xl:hidden lg:hidden">
            <div class="flex items-center justify-start blue white-text px-4 py-5 shadow-lg">
                <a href="#" @click="menuShowing = !menuShowing" class="mr-3 white-text text-3xl">
                    <span class="iconify" data-icon="entypo:menu" data-inline="false"></span>
                </a>
                <transition name="nav-transition"
                    enter-active-class="animate__animated animate__faster animate__slideInLeft"
                    leave-active-class="animate__animated animate__faster animate__slideOutLeft">
                    <nav class="navy-blue shadow-lg w-2/3 sm:w-2/3 md:w-1/2 page-height z-10 fixed left-0 top-0 bottom-0 p-3 pl-5"
                        v-if="menuShowing">
                        <div class="text-right">
                            <a href="#" @click="menuShowing = false" class="white-text text-xl">
                                <span class="iconify" data-icon="entypo:circle-with-cross" data-inline="false"></span>
                            </a>
                        </div>
                        <h2 class="mb-3 uppercase text-sm opacity-75 font-bold">Menu</h2>
                        <ul class="m-0">
                            <li v-for="menuitem in menu" :key="menuitem.route" class="relative py-1 my-2">
                                <g-link :to="menuitem.route" class="white-text block text-md flex justify-start items-center">
                                    <span class="iconify text-gray-500 text-xs mr-2" data-icon="entypo:circle"></span>
                                    {{ menuitem.name }}
                                    <!-- <i
                                        class="iconify text-xl"
                                        data-icon="entypo:chevron-small-down"
                                        v-if="menuitem.dropdown">
                                    </i> -->
                                </g-link>
                                <div v-if="menuitem.dropdown" class="ml-6">
                                    <div v-for="submenu in menuitem.dropdown" :key="submenu.route" class="my-2">
                                        <g-link :to="submenu.route" class="white-text opacity-75">
                                            {{ submenu.name }}
                                        </g-link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </transition>
                <g-link to="/">
                    <g-image src="/img/njtd_logo.png" style="width:37px;height:35px;" />
                </g-link>
                <div class="ml-2">
                    <h1 class="text-xl font-bold white-text">
                        <g-link to="/" class="njtd white-text">NJTD</g-link>
                    </h1>
                    <h1 class="text-xs -mt-1 font-semibold">
                        Nigerian Journal of Tech. Development
                    </h1>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import Search from '~/components/Search'
import headerInfo from '~/contents/header_info.json'

export default {
    name: 'navbar',
    components: {
        Search
    },
    data () {
        return {
            tagLine: headerInfo.tagline,
            menuShowing: false,
            siteInfo: headerInfo.site,
            menu: [
                {
                    name: 'HOME',
                    route: '/'
                },
                {
                    name: 'ARCHIVES',
                    route: '/archive',
                    // dropdown: [
                    //     { name: 'Special Issues', route: '/archive' },
                    //     { name: 'Volume 1', route: '/archive/v1' },
                    //     { name: 'Volume 2', route: '/archive/v2' },
                    //     { name: 'Volume 3', route: '/archive/v3' },
                    // ]
                },
                {
                    name: 'ANNOUNCEMENTS',
                    route: '/announcements'
                },
                {
                    name: 'PUBLICATION ETHICS',
                    route: '/publication-ethics'
                },
                {
                    name: 'SUBMIT PAPER',
                    route: '/submissions'
                },
                {
                    name: 'INFORMATION',
                    route: '/information/readers',
                    dropdown: [
                        { name: 'For Readers', route: '/information/readers' },
                        { name: 'For Authors', route: '/information/authors' },
                        { name: 'For Librarians', route: '/information/librarians' },
                    ]
                },
                {
                    name: 'ABOUT',
                    route: '/about',
                    dropdown: [
                        { name: 'About NJTD', route: '/about' },
                        { name: 'Editorial Team', route: '/team' },
                    ]
                },
                {
                    name: 'CONTACT',
                    route: '/contact'
                }
            ]
        }
    }
}
</script>

<static-query>
query {
    metadata {
        siteName
    }
}
</static-query>

<style lang="scss" scoped>
.page-meta, .menu-list {
    height: 50px;
}

.page-meta {

    > .layout {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        > div {
        }
    }
}

.njtd {
    color: white !important;
}

.site-title {
    height: 170px;
}

.active--exact {
    color: $secondary;
    font-weight: bold;
    opacity: 1;
}

.menu-list {
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);

    ul.main-menu {
        li {
            display: inline;
            // margin-right: 30px;

            &:hover {
                ul {
                    display: block;
                    min-width: 150px;
                    border-radius: 0 0 5px 5px;

                    li {
                        &:last-child {
                            a {
                                border-radius: 0 0 5px 5px;
                            }
                        }

                        &:hover {
                            a {
                                background-color: $orange;
                                color: $white;
                            }
                        }

                        a {

                            &.active--exact {
                                &:after {
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }

            a {
                font-size: 13px;
                color: $white;
                opacity: 0.83;

                &.active--exact {
                    color: $secondary;
                    font-weight: 600;
                    opacity: 1;

                    &:after {
                        content: " ";
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 176%;
                        height: 3.5px;
                        background: $secondary;
                        border-radius: 5px 5px 0 0;
                    }
                }

            }
        }
    }
}
</style>
