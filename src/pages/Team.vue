<template>
    <Layout>
        <!-- <h1 class="text-3xl font-bold mb-5">The Editorial Team</h1> -->
         
              <div class="mb-16 mt-5">
                <!-- Editorial Board -->
                <section class="mb-10">
                  <h2 class="text-2xl orange-text font-semibold mb-3">Editorial Board</h2>
                  <section class="flex flex-wrap -mx-2">
                    <div class="w-full sm:w-full md:w-1/2 lg:w-1/3 px-2" v-for="member in board.main" :key="member.name">
                      <router-link :to="{ name: 'profile', params: { memberName: member.name } }" class="no-underline">
                        <div class="member-card bg-gray-100 rounded-lg p-5 shadow-sm mb-3">
                          <h5 class="font-semibold">{{ member.portfolio }}</h5>
                          <div class="text-sm font-medium">{{ member.name }}</div>
                          <div class="text-sm dark-text">{{ member.dept }}</div>
                          <div class="text-sm dark-text">{{ member.institution }}</div>
                          <div class="text-sm dark-text">{{ member.location }}</div>
                        </div>
                      </router-link>
                    </div>
                  </section>
                </section>

            <!-- Section Editors -->
            <section class="mb-10">
                <h2 class="text-2xl orange-text font-semibold mb-3">Section Editors</h2>
                <section class="flex flex-wrap -mx-2">
                    <div class="w-full sm:w-full md:w-1/2 lg:w-1/3 px-2"
                        v-for="member in board.section" :key="member.name">
                        <div class="" v-if="member.hide"></div>
                        <div class="member-card bg-gray-100 rounded-lg p-5 shadow-sm mb-3" v-else>
                            <h5 class="font-semibold mb-1">
                                {{ member.portfolio }}
                            </h5>
                            <div class="text-sm font-medium">{{ member.name }}</div>
                            <div class="text-sm dark-text">{{ member.dept }},</div>
                            <div class="text-sm dark-text">{{ member.institution }},</div>
                            <div class="text-sm dark-text">{{ member.location }}</div>
                        </div>
                    </div>
                </section>
            </section>
            
            <!-- Guest Editors -->
            <section class="mb-10">
                <h2 class="text-2xl orange-text font-semibold mb-3">Guest Editors</h2>
                <section class="flex flex-wrap -mx-2">
                    <div class="w-full sm:w-full md:w-1/2 lg:w-1/3 px-2"
                        v-for="member in board.guest" :key="member.name">
                        <div class="" v-if="member.hide"></div>
                        <div class="member-card bg-gray-100 rounded-lg p-5 shadow-sm mb-3" v-else>
                            <h5 class="font-semibold mb-1">
                                {{ member.portfolio }}
                            </h5>
                            <div class="text-sm font-medium">{{ member.name }}</div>
                            <div class="text-sm dark-text">{{ member.dept }},</div>
                            <div class="text-sm dark-text">{{ member.institution }},</div>
                            <div class="text-sm dark-text">{{ member.location }}</div>
                        </div>
                    </div>
                </section>
            </section>

            <!-- Advisory Board -->
            <section class="mb-10">
                <h2 class="text-2xl orange-text font-semibold mb-3">Advisory Board</h2>
                <section class="flex flex-wrap -mx-2">
                    <div class="w-full sm:w-full md:w-1/2 lg:w-1/3 px-2"
                        v-for="member in board.advisory" :key="member.name">
                        <div class="member-card short bg-gray-100 rounded-lg p-5 shadow-sm mb-3">
                            <div class="text-sm font-medium">{{ member.name }}</div>
                            <div class="text-xs dark-text">{{ member.dept }},</div>
                            <div class="text-xs dark-text">{{ member.institution }},</div>
                            <div class="text-xs dark-text">{{ member.location }}</div>
                        </div>
                    </div>
                </section>
            </section>

        </div>
    </Layout>
</template>

<script>
import board from '~/contents/board.json'

export default {
    name: 'team',
    
    data () {
        return {
            board
        }
    }
}
</script>

<style lang="scss" scoped>
.member-card {
    min-height: 11.7em;

    &.short {
        min-height: 9.5em;
    }
}
</style>
