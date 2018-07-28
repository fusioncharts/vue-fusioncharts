<template>
  <div id="app">
    <the-header :wrapper-github-repo-url='config.githubRepo' />
    <div class="page-container">
      <div id="mainContainer" class="main-container">
            <WrapperInfo :config="config" />
            <SamplesViewer
              :samplesConfig="sampleConfig"
              :wrapperName="config.name"
            />
          <div class="container container-1200 info-wrapper pt-4">
            <QuickStartViewer
              :quickStartHTMLCode="config.quickStartGuide"
            />
            <app-footer
              :wrapperHeading="config.heading"
              :githubRepoURL="config.githubRepo"
              :issuesURL="config.issuesURL"
              :newIssueURL="config.newIssueURL"
            />
          </div>
        <div id="footbar" class="row text-center mt-2">
            <div class="col-12">
                <p class="foot-item pt-4">© 2002-2018 InfoSoft Global Private Limited. All Rights Reserved.</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/Header'
import WrapperInfo from './components/WrapperInfo'
import AppFooter from './components/Footer'
import QuickStartViewer from './components/QuickStartViewer'
import SamplesViewer from './components/SamplesViewer'

import config from './config/wrapper.config'
import sampleConfig from './config/sample.config'
export default {
  name: 'app',
  data () {
    return {
      config: config,
      sampleConfig
    }
  },
  components: {
    TheHeader,
    WrapperInfo,
    SamplesViewer,
    QuickStartViewer,
    AppFooter
  }
}
</script>


