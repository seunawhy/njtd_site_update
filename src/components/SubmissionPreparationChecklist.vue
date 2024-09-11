<template>
    <div id="submission-preparation-checklist" class="mb-20">
        <h3 class="text-2xl font-semibold mb-2 orange-text">
            <span class="iconify opacity-25" data-icon="entypo:link" data-inline="false"></span>
            Submission Preparation Checklist
        </h3>
        <p>
            As part of the submission process, authors are required to check off their submission's compliance with all of the following items, and submissions may be returned to authors that do not adhere to these guidelines.
        </p>

        <div class="mt-5 bg-gray-100 rounded-lg">
            <div v-for="(item, i) in checklist" :key="item">
                <p class="p-6">
                    <span class="iconify" data-icon="entypo:check" data-inline="false"></span>
                    {{ item }}
                </p>
                <hr class="border-gray-300" v-if="i < 6">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            checklist: [
                'The submission has not been previously published, nor is it before another journal for consideration (or an explanation has been provided in Comments to the Editor).',
                'The submission file is in OpenOffice, Microsoft Word, or RTF document file format. However, the file could be converted to PDF when size error problem is encountered.',
                'Where applicable, URLs for the references have been provided.',
                'The text is double-spaced; uses a 12-point font; employs italics, rather than underlining (except with URL addresses); and all illustrations, figures, and tables are placed within the text at the appropriate points, rather than at the end.',
                'The text adheres to the stylistic and bibliographic requirements outlined in the Author Guidelines.',
                'The main manuscript does not contain the authors\' names and institutional affiliations.',
                'The title page containing the Title of the manuscript, Authors’ details, Abstract and Keywords has been uploaded on the portal.'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>