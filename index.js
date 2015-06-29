export function translate(unit) {
  var name = unit.name;

  name = name.replace(/[!].+$/, '');

  var escName   = JSON.stringify(name);
  var escSource = JSON.stringify(unit.source);

  return `"format es6";
    var name = ${escName};
    export default name;

    angular.module("ng").run(['$templateCache', function($templateCache){
      $templateCache.put(${escName},${escSource});
    }]);
  `;
};
