<template>
  <div id="author-guidelines" class="mb-10">
    <h3 class="text-2xl font-semibold mb-4 orange-text">
      <span
        class="iconify opacity-25"
        data-icon="entypo:link"
        data-inline="false"
      ></span>
      NJTD Submission Guidelines
    </h3>
    <section>
      <div class="mb-10 text-justify">
        <h6 class="font-semibold mb-1 text-xl blue-text">Aim and Scope</h6>
        <p class="text-md">
          The Nigerian Journal of Technological Development (NJTD) publishes high-quality articles focusing on all aspects of Engineering and Applied Sciences. 
          All manuscripts will be double blind peer-reviewed and if found suitable, 
          published according to the subject matter, either as <strong> full length research articles or review papers.</strong>
        </p>
      </div>

      <!-- <div class="mb-10">
        <h6 class="font-semibold mb-1 text-xl blue-text">
          Submission of Manuscript
        </h6>
        <p class="text-md">
          Submission of manuscript is on the condition that it is an original
          work of the author(s) and it has neither been published previously nor
          currently under consideration for publication elsewhere. Authors
          should submit the electronic copy of their manuscript directly to the
          journal through the journal's website using the online submission
          system. Please do not submit a hard copy to the editorial office or
          send your manuscripts by e-mail unless you are facing some
          difficulties in uploading it on the portal.
        </p>
        <p class="text-md my-2">
          After the manuscript has been submitted, you will see a confirmation
          screen and receive an email confirmation stating that your manuscript
          has been successfully submitted. If you do not receive this, your
          manuscript will not have been successfully submitted to the journal
          and the paper cannot progress to peer review. If this is the case your
          manuscript will still be sitting in the 'Incomplete' section of your
          'Author Page' awaiting your attention.
        </p>
        <p class="text-md">
          To track your submission's progress through the review and editorial
          process, you will need to log into the journal website, and choose
          your role as Author. Click on the linked title to go to the submission
          record.
        </p>
      </div> -->

      <div class="mb-10">
        <h6 class="font-semibold mb-1 text-xl blue-text">
          Preparation of the Manuscript
        </h6>
        <p class="mb-3">
          Manuscript should be written in English Language and typed in 12 point font size using Times New Roman in double-line spacing on A4 paper. A margin of 25 mm should be left at the sides. The paper should not exceed twenty (20) pages, including figures and tables. The text should be in single-column format.
        </p>
        <div>
          <ul class="ml-5">
            <li
              v-for="heading in manuscriptHeadings"
              :key="heading.heading"
              class="my-6"
            >
              <h3 class="font-semibold text-">{{ heading.heading }}</h3>
              <p class="dark-text text-md pt-1 italic" >{{ heading.body_italics }}</p>
              <p class="dark-text text-md text-justify pt-1">{{ heading.body }}</p>
              <p class="dark-text text-md pt-1" >{{ heading.body_2 }}</p>
              <p class="dark-text text-md pt-1" >{{ heading.body_3 }}</p>
             
              <div v-if="heading.list" class="ml-4 mt-4 text-left font-normal">
                <div class="mb-8" v-for="item in heading.list" :key="item.key">
                  <h5 class="mb-1 text-sm font-semibold">
                    {{ item.key }}
                  </h5>
                  <div
                    class="p-3 rounded-md text-sm bg-gray-100 border-l-4 border-gray-300"
                    v-html="item.value"
                  ></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- <div id="article_publication_charge" class="mb-10">
        <h6 class="font-semibold mb-1 text-xl blue-text">
          Processing and Publication Charges
        </h6>
        <p class="mb-3">
          This Journal no longer charges Article Processing fee. However, an Article Publication Charge (APC) of ₦30,000.00 (for authors in Nigeria) and $100.00 (for authors outside Nigeria) shall be imposed after acceptance. The evidence of payment should be uploaded on the portal against the submission. Details of payment information shall be sent to the corresponding author by the Managing Editor after acceptance. 
        </p> -->
        <!-- <table class="my-4">
          <template v-for="(detail, dx) in paymentDetail">
            <tr
              class=""
              :key="detail.key"
              :class="{
                'bg-gray-200': dx % 2 === 0,
                'bg-gray-100': dx % 2 > 0,
              }"
            >
              <td class="py-2 px-4 text-sm font-semibold text-right">
                {{ detail.key }}
              </td>
              <td class="py-2 pr-4">
                {{ detail.value }}
              </td>
            </tr>
          </template>
        </table> -->
        <!-- <p class="my-1">
          Payment instructions will be sent to the corresponding author by the
          Managing Editor after the acceptance of the paper. The evidence of
          payment should be uploaded on the portal against the submission
          immediately after payment.
        </p>
        <p>
          To encourage foreign authors, the processing fee is waived for any
          submission which does not have any Nigerian author.
        </p> -->
      <!-- </div> -->

      <!-- <div class="mb-10">
        <h6 class="font-semibold mb-1 text-xl blue-text">
          Acknowledgements
        </h6>
        <p class="mb-3">
          Acknowledgement of the individuals who provided help during the
          research should be collated in a separate section at the end of the
          article before the references and should, therefore, not be included
          on the title page, as a footnote to the title or otherwise.
        </p>
      </div> -->

      <div class="mb-10 text-justify">
        <h6 class="font-semibold mb-1 text-xl blue-text">
          Suggested Reviewers
        </h6>
        <p class="mb-3">
          A list of, at least, three suggested reviewers should be provided with
          their current institutional affiliations as well as email addresses.
          However, please note that the Managing Editor reserves the right to
          determine the appropriate reviewers to review your manuscript. This
          request is simply to populate our database of reviewers in diverse
          fields.
        </p>
      </div>

      

      <div class="mb-10 text-justify">
        <h6 class="font-semibold mb-1 text-xl blue-text">
          Submission Checklist
        </h6>
        <p class="mb-2">
          The following list will be useful during the final checking of your article prior to sending it to the 
journal for review. Please ensure that the following items are present:
        </p>

        <div>
          <ul class="ml-5">
            <li
              v-for="item in submissionChecklist"
              :key="item.entry"
              class="my-5 font-medium"
            >
              <span
                class="iconify dark-text"
                data-icon="entypo:controller-stop"
              ></span>
              {{ item.entry }}
              <ul v-if="item.list" class="ml-10 font-normal">
                <li
                  v-for="subItem in item.list"
                  :key="subItem"
                  class="my-1 list-disc"
                >
                  {{ subItem }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="mb-10 text-justify">
        <h6 class="font-semibold mb-1 text-xl blue-text">
          Submission of Manuscript
        </h6>
        <p class="text-md">
          The online manuscript takes four stages to be successfully completed. In the first stage, you must check all the Submission Requirements checkboxes, and must agree to the copyright statement. Clicking on the “Save and continue” button takes you to the “Upload Submission Files” page, where you must select an Article Component such as “Source texts” or “Article text”. Next, you upload File 1, which is the file named Manuscript after which you click on the Continue button, next click on the Continue button again. At this point, click on “Add Another File”. On the displayed window, pick “This is not a revision of an existing file”, then select Article Component, which may also be “Source texts” or “Article text”. Upload the file named Title_Page, and continue, then click on the “Complete” button if you have no other document to upload again. Click on “Save and continue” to enter the article title and abstract. No need to enter the subtitle. To add other authors, click on the “Add contributor” button. Enter all the compulsory fields and save to add more authors or finish the submission process by clicking the “Finish Submission” button.   
        </p>
        <p class="text-md my-2">
          After the manuscript has been submitted, you will see a confirmation screen and receive an email confirmation stating that your manuscript has been successfully submitted. If you do not receive this, your manuscript will not have been successfully submitted to the journal and the paper cannot progress to peer review. If this is the case your manuscript will still be sitting in the 'Incomplete' section of your 'Author Page' awaiting your attention to complete the process.
        </p>
        <p class="text-md">
          To track your submission's progress through the review and editorial process, you will need to log into the journal website, and choose your role as Author. Click on the linked title to go to the submission record. There, you can see how many reviewers have completed their reviews out of a total assigned by the Editor. Authors should not panic when you see “A review is overdue”. That message is not for your consumption. You may wish to call the attention of the Editor if you do not get a feedback from us after three months of submission.
        </p>
      </div>
      <div class="mb-10" id="open_access_agreement">
        <h6 class="font-semibold mb-1 text-xl blue-text">
          Open Access Agreement
        </h6>
        <p class="mb-3">
          Upon acceptance of an article, authors will be requested to download from our homepage the open access agreement form, complete and sign it, and then upload it to the portal against that particular submission. 
        </p>
      </div>

      <div class="mb-10 text-justify" id="article_publication_charge">
        <h6 class="font-semibold mb-1 text-xl blue-text">
          Article Publication Charge
        </h6>
        <p class="mb-3">
          The Nigerian Journal of Technological Development (NJTD) is an open access journal. As a result, publishing of an article in the Journal requires an Article Publication Charge (APC), which will be billed following the acceptance of the article. Aside from this, the Journal does not impose any other charge on the author, be it submission charge or colour charge. 
        </p>
        <p class="mb-3">
          The APC will be charged based on the corresponding author’s affiliation. Where the corresponding author has a dual affiliation, the affiliation of where the work was carried out will be used. For the corresponding authors based in Nigeria, the APC of ₦60,000.00 (NGN) will be imposed while $150.00 (USD) will be imposed on corresponding authors outside Nigeria. The publication fee is non-refundable once the article is published online. Payment can be made by International Bank wire transfer, Western Union money transfer, MoneyGram, Online money transfer, or Payoneer. 
        </p>
        <p>
          Payment instructions will be sent to the corresponding author by the Managing Editor after the acceptance of the paper. The evidence of payment should be uploaded on the portal against the submission immediately after payment.
        </p>
      </div>

      <div class="mb-10 text-justify">
        <h6 class="font-semibold mb-1 text-xl blue-text">
          Subscription and Advertisement
        </h6>
        <p class="mb-3">
          The subscription and advertisement rates can be obtained from the Editor-in-Chief, the Managing Editor or the Business Manager. Current and past volumes of the journal are available at 
          <span class="font-semibold">
            Room G11, Department of Materials and Metallurgical Engineering,
            Faculty of Engineering and Technology, University of Ilorin, Ilorin;
            at Options Bookshop, Ibadan; or Jasper Books Nig. Ltd, Ilorin </span>, for sale at reduced price.
        </p>
      </div>
      <div class="mb-10 text-justify">
        <h6 class="font-semibold mb-1 text-xl blue-text">
          Complimentary Copies
        </h6>
        <p class="mb-3">
          Since authors can always download their published papers from our website at www.njtd.com.ng, on our homepage at AJOL and in the Scopus database, we no longer send the author’s complimentary copy to the authors. However, any author that so requires a print version of the journal shall pay a sum of Three Thousand Naira (N3,000:00) per copy exclusive of the delivery cost.
        </p>
      </div>

      <div class="mb-10 text-justify">
        <h6 class="font-semibold mb-1 text-xl blue-text">
          Queries
        </h6>
        <p class="mb-3">
          For technical support on submissions, please send an e-mail to the Managing Editor via njtd_man_editor@unilorin.edu.ng or editor@njtd.com.ng. For questions about the editorial process especially on the status of manuscripts under review, authors may write to request for this information only when a three-month period from submission has elapsed.
        </p>
      </div>
      <div class="mb-10 text-justify">
        <h6 class="font-semibold mb-1 text-xl blue-text">
          Peer Review Process
        </h6>
        <p class="mb-3">
          NJTD operates a double anonymised peer review process. All submissions will be initially assessed by the Editor for suitability for the journal. Papers deemed technically suitable are then subjected to plagiarism check. If the similarity index is higher than 25%, such article is rejected at that stage and the corresponding author is communicated. Articles that pass this stage will be allocated to a Section Editor, who assigns a minimum of three reviewers to evaluate the scientific quality of the manuscript. However, the Editor is responsible for the final decision regarding acceptance or rejection of articles, and this decision is final. 
        </p>
        <p class="mb-3">
          Authors are encouraged to download the article processing flowchart from our homepage. The document summarises the peer review process used by NJTD. Authors should note that this process may last up to three months on the average.  
        </p>
      </div>        

    </section>
  </div>
</template>

<script>
import manuscriptHeadings from "~/contents/manuscript_headings.json";
import submissionChecklist from "~/contents/submission_checklist.json";

export default {
  data() {
    return {
      paymentDetail: [
        { key: "Bank Name", value: "United Bank for Africa Plc" },
        {
          key: "Account Name",
          value: "Nigerian Journal of Technological Development [NJTD]",
        },
        { key: "Account Number", value: "1013302840" },
        { key: "SWIFT Code", value: "UNAFNGLA049" },
        { key: "Country", value: "Nigeria" },
      ],
      submissionChecklist,
      manuscriptHeadings,
    };
  },
};
</script>

<style lang="scss" scoped></style>
