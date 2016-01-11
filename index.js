export function translate(unit) {
  var name = unit.name;

  name = name.replace(/[!].+$/, '');

  var escName   = JSON.stringify(name);
  var escSource = JSON.stringify(unit.source);
  var result = `
    def`+`ine(function() {
        var name = ${escName};
        var source = ${escSource};

        angular.module("ng").run(['$templateCache', function($templateCache){
          $templateCache.put(name, source);
        }]);

        return name;
    });
  `;

  unit.metadata.format = 'amd';

  return result;
};
