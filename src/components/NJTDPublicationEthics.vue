<template>
    <div id="njtd-publication-ethics" class="mb-10 text-justify">
        <h3 class="text-2xl font-semibold mb-2 orange-text">
            <span class="iconify opacity-25" data-icon="entypo:link" data-inline="false"></span>
            Publication Ethics
        </h3>

        <p class="mb-5">
            The Nigerian Journal of Technological Development (NJTD) observes ethical standards for its publications to ensure high quality, public trust in scientific findings, and that credits are given to the original owners of the ideas used by authors. To this end, members of public are requested to take note of the following information:
        </p>

        <div class="md:ml-0 lg:ml-0">
            <div v-for="info in information" :key="info.title" class="mb-10">
                <h6 class="font-semibold mb-1">{{ info.title }}</h6>
                <p class="dark-text text-md text-justify">{{ info.brief }}</p>
                <p class="dark-text text-md pb-0 py-1 text-justify">{{ info.brief_2 }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            information: [
                {
                    title: 'Data Fabrication and Falsification',
                    brief: 'NJTD takes exception to fabrication and falsification of data used in their works submitted to the journal. Published articles, which are later discovered to be guilty of this offence shall be retracted and such information publicised to our readership immediately.'
                },
                {
                    title: 'Plagiarism Detection',
                    brief: 'NJTD uses an anti-plagiarism software to detect matches of the submission with the existing texts. Any submission with a similarity index greater than 25% will be rejected at that level. '
                },
                {
                    title: 'Multiple Submissions',
                    brief: 'It is unethical for authors to submit a single manuscript to different journals concurrently. Authors who desire to submit an already submitted article with another journal must forward to NJTD Managing Editor evidence of withdrawal from the first journal.'
                },
                {
                    title: 'Redundant Publications',
                    brief: 'This means publishing different versions of a very similar manuscript based on the same experiment or study. It can easily result in self-plagiarism, which should be avoided by authors.'
                },
                {
                    title: 'Improper Author Contribution or Attribution',
                    brief: 'Authors are advised to ensure that all listed authors make a significant scientific contribution to the research in the manuscript before listing their names as co-authors. For transparency, authors should submit an author statements outlining individual contributions to the paper using the following roles: Conceptualization; Data curation; Formal analysis; Funding acquisition; Investigation; Methodology; Project administration; Resources; Software; Supervision; Validation; Visualization; Writing – original draft; Writing – review & editing.',
                    brief_2: 'For example, S. O. Sanni: Conceptualization, Methodology, Software, Validation, Writing – original draft, Writing – review & editing. M. F. Akorede: Supervision, Writing – original draft, Writing – review & editing. G. A. Olarinoye: Writing – review & editing.'
                },
                {
                    title: 'COPE Policies',
                    brief: 'NJTD endorses the policies of Committee on Publication Ethics (COPE), including those that cover overlapping publications.'
                },
                {
                    title: 'Confidentiality of Submissions',
                    brief: 'Reviewers are strongly advised against showing or discussing manuscripts allocated to them with colleagues and/or the authors. This is necessary to keep the submitted document as confidential as possible. This warning also applies to invited reviewers who decline the review invitation.'
                },
                {
                    title: 'Reviewer’s Promptness',
                    brief: 'Any invited referee who does not possess the required expertise or has it but will be unavailable to carry out the assignment is requested to immediately notify the Managing Editor to decline the review invitation. This is necessary to avoid any unnecessary delay in the peer review process.'
                },
                {
                    title: 'Notification of fundamental errors in published works',
                    brief: 'It is the obligation of the authors who discover significant errors or inaccuracies in their own published work to notify the Managing Editor promptly in order to take an appropriate action in due course.'
                },
                {
                    title: 'Access to Journal Contents',
                    brief: 'The publisher, Faculty of Engineering & Technology, University of Ilorin, is committed to ensuring that published scholarly research findings are permanently made available online as well as in print form. This would guarantee express access to them at any time.'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
