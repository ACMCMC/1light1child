import Vue from 'vue';
import VueGtag from 'vue-gtag';

Vue.use(
  VueGtag, {
  config: { id: 'G-CJWRQRRG4Y' },
  params: {
    anonymize_ip: true
  }
}
);