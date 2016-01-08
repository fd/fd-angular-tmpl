export function translate(unit) {
  var name = unit.name;

  name = name.replace(/[!].+$/, '');

  var escName   = JSON.stringify(name);
  var escSource = JSON.stringify(unit.source);

  unit.metadata.format = 'global';

  return `var name = ${escName};

    angular.module("ng").run(['$templateCache', function($templateCache){
      $templateCache.put(${escName},${escSource});
    }]);
  `;
};