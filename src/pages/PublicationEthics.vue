<template>
    <Layout>
        <!-- <div>
            <h1 class="text-3xl font-bold mb-5">
            Publication Ethics
            </h1>
        </div> -->
        <div class="">
            <NJTDPublicationEthics />
            <OpenAccessPolicy />
            <CopyrightNotice />
            <PrivacyStatement />
            <PeerReviewProcess/>
            <AbstractingAndIndexing />
            
        </div>
        

    </Layout>
</template>

<script>
import NJTDPublicationEthics from "~/components/NJTDPublicationEthics";
import OpenAccessPolicy from "~/components/OpenAccessPolicy";
import CopyrightNotice from "~/components/CopyrightNotice";
import PrivacyStatement from "~/components/PrivacyStatement";
import AbstractingAndIndexing from "~/components/abstractingAndIndexing";
import PeerReviewProcess from "~/components/PeerReviewProcess";

export default {
    metaInfo:{
        title: "Publication Ethics",

    },
    components:{
        NJTDPublicationEthics,
        OpenAccessPolicy,
        CopyrightNotice,
        PrivacyStatement,
        AbstractingAndIndexing,
        PeerReviewProcess,
    },
    
    
};
</script>

<style lang="scss" scoped>

</style>