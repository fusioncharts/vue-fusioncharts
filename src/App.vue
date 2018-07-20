<template>
  <div id="app">
    <the-header :wrapper-github-repo-url='config.githubRepo' />
    <WrapperInfo :config="config" />
    <SamplesViewer
      :samplesConfig="sampleConfig"
      :wrapperName="config.name"
    />
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


