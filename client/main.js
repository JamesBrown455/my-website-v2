import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '/imports/ui/components/header/header.js';
import '/imports/ui/components/nav/nav.js';
import '/imports/ui/pages/about/about.js';
import '/imports/ui/pages/intro/intro.js';
import '/imports/ui/pages/research/research.js';
import '/imports/ui/pages/contact/contact.js';


var scrollFunction = function(idstring) {
  $('html, body').animate({
    scrollTop: $(idstring).offset().top
  }, 1000);
};

Template.nav.events({
  "click #introlink": function() {
    scrollFunction('#intro');
  },

  "click #aboutlink": function() {
    scrollFunction('#about');
  },

  "click #contactlink": function() {
    scrollFunction('#contact');
  },

  "click #researchlink": function() {
    scrollFunction('#research');
  },
});
