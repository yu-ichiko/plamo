/**
 * @fileOverview home
 * @author yu-ichiko@gmail.com
 */

var $ = require('jquery');

var home = require('../templates/home.hbs');

/**
 * FormSpecs
 * @type {Array}
 */
exports.form = [
  {
    label: '文字列',
    name: 'id',
    type: 'string'
  },
  {
    label: '数字(整数)',
    name: 'point',
    type: 'integer'
  },
  {
    label: '数字(実数)',
    name: 'date',
    type: 'number'
  },
  {
    label: 'グループ',
    name: 'group',
    type: 'group',
    fields: [
      {
        label: 'テスト01',
        name: 'test01',
        type: 'date'
      },
      {
        label: 'テスト02',
        name: 'test02',
        type: 'integer'
      }
    ]
  },
  {
    label: 'マルチプル',
    name: 'multiple',
    type: 'multiple',
    fields: [
      {
        label: 'テスト03',
        name: 'test03',
        type: 'string'
      }
    ]
  }
];

exports.render = function() {
  console.log('home');
  $('#main').empty().append(home({test:'home'}));
};
