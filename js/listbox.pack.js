var add = function (origem, destino, ordenar, input) {
  var index_selected = new Array();
  var index_dados = 0;
  var select_origem = document.getElementById(origem);
  var select_destino = document.getElementById(destino);
  var length = select_origem.length;
  
  for (var i = 0; i < length; i++){
    if (select_origem.options[i].selected) {
      index_selected.push(i)
    }
  } index_selected.reverse();
  for (var i = 0; i < index_selected.length; i++){
    var option_aux = select_origem.options[index_selected[i]].cloneNode(true);
    select_origem.remove(index_selected[i]); select_destino.add(option_aux)
  }
  
  if (ordenar) {
    var dados_option = new Array();
    var options = document.getElementById(destino).options;
    for (var i = 0; i < options.length; i++){
      dados_option[i] = new Array();
      dados_option[i][0] = options[i].text;
      dados_option[i][1] = options[i].value
    }
    document.getElementById(destino).innerHTML = "";
    dados_option.sort();
    for (var i = 0; i < dados_option.length; i++){
      var new_option = new Option(dados_option[i][0], dados_option[i][1], "", "");
      document.getElementById(destino).add(new_option)
    }
  } else {
    var dados_option = new Array();
    var options = document.getElementById(destino).options;
    for (var i = 0; i < options.length; i++){
      dados_option[i] = new Array();
      dados_option[i][0] = options[i].text;
      dados_option[i][1] = options[i].value
    } document.getElementById(destino).innerHTML = "";
    dados_option.reverse();
    
    for (var i = 0; i < dados_option.length; i++){
      var new_option = new Option(dados_option[i][0],
        dados_option[i][1], "", "");
      document.getElementById(destino).add(new_option)
    }
  }
  select_origem.selectedIndex = -1;
  select_destino.selectedIndex = -1;
  if (!ordenar)
    get_join_values(destino, input);
  else get_join_values(origem, input)
}
var add_all = function (origem, destino, ordenar, input) {
  var dados = new Array();
  var select_origem = document.getElementById(origem);
  var select_destino = document.getElementById(destino);
  var length = select_origem.length;
  for (var i = 0; i < length; i++){
    var option_selected = select_origem.options[i];
    dados[i] = new Array();
    dados[i][0] = i; dados[i][1] = option_selected
  }
  for (var i = 0; i < dados.length; i++){
    var index = dados[i][0];
    var option = dados[i][1];
    select_origem.remove(index);
    select_destino.add(option)
  }
  if (ordenar) {
    var dados_option = new Array();
    var options = document.getElementById(destino).options;
    for (var i = 0; i < options.length; i++){
      dados_option[i] = new Array();
      dados_option[i][0] = options[i].text;
      dados_option[i][1] = options[i].value
    }
    document.getElementById(destino).innerHTML = "";
    dados_option.sort();
    for (var i = 0; i < dados_option.length; i++){
      var new_option = new Option(dados_option[i][0], dados_option[i][1], "", "");
      document.getElementById(destino).add(new_option)
    }
  }
  select_origem.selectedIndex = -1;
  select_destino.selectedIndex = -1;
  if (!ordenar) get_join_values(destino, input);
  else get_join_values(origem, input)
}
var get_join_values = function (id, input) {
  var select = document.getElementById(id);
  var values = "";
  for (var i = 0; i < select.length; i++){
    if (i == 0) {
      values = select.options[i].value
    } else {
      values += "," + select.options[i].value
    }
  }
  document.getElementById(input).value = values
}