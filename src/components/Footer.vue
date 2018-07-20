<template>
  <footer class="container footer">
      <h3>Community</h3>
      <div class="community-links-holder">
        <ul>
          <li>
            <div class="community-menu-item">
              <a
                :href="githubRepoURL"
                rel="noreferrer noopener"
                target="_blank"
              >
              Github Repo
              </a>
            </div>
          </li>
          <li class="community-virtical-line-item">
            <div class="community-virtical-line">
              <VerticalLine :styles="verticalLineStyle" />
            </div>
          </li>
          <li>
            <div class="community-menu-item">
              <a :href="issuesURL" rel="noreferrer noopener" target="_blank">Issues</a>
            </div>
          </li>
          <li class="community-virtical-line-item">
            <div class="community-virtical-line">
              <VerticalLine :styles="verticalLineStyle" />
            </div>
          </li>
          <li>
            <div class="community-menu-item">
              <a href="http://twitter.com/fusioncharts" rel="noreferrer noopener" target="_blank">FusionCharts Twitter</a>
            </div>
          </li>
          <li class="community-virtical-line-item">
            <div class="community-virtical-line">
              <VerticalLine :styles="verticalLineStyle" />
            </div>
          </li>
          <li>
            <div class="community-menu-item">
              <a href="http://stackoverflow.com/questions/tagged/fusioncharts" rel="noreferrer noopener" target="_blank">Stack Overflow</a>
            </div>
          </li>
          <div :style="{ clear: 'both' }" />
        </ul>
      </div>
      <h3>Support</h3>
      <div class="support-text-holder">
        <p>
          Simply open up a <a
            :href="newIssueURL"
            rel="noreferrer noopener"
            target="_blank"
          >Github</a> issue with your query, bug report, or suggestion.
        </p>
      </div>
      <h3>Licensing</h3>
      <div class="licensing-text-holder">
        <p>
          {{ wrapperHeading }} is an open-source resouorce, distributed under the terms of the MIT/X11
          License. You will still need to include FusionCharts in your page, as this project provides
          no direct functionality. You can download a free evaluation
          version <a href="http://fusioncharts.com/download/" rel="noreferrer noopener" target="_blank">here</a>.
          <br />
          <br />
          FusionCharts is <a href="http://www.fusioncharts.com/download/free/" rel="noreferrer noopener" target="_blank">free for
          non-commercial and personal use</a>. To use in a commercial environment,
          please purchase a FusionCharts license.
        </p>
      </div>
    </footer>
</template>

<script>

import VerticalLine from './VerticalLine';
export default {
  name: 'AppFooter',
  props: ['githubRepoURL', 'issuesURL', 'newIssueURL', 'wrapperHeading'],
  data(){
    return {
      verticalLineStyle: {
        height: 10,
        marginTop: 3,
        backgroundColor: '#a3a3a3',
      }
    }
  },
  components: {
    VerticalLine
  }
}
</script>

<style>

</style>

