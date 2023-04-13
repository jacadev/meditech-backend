const filterBySpecialtyHelper = (temp, dbMerged) => {
  const filtered = [];
    dbMerged.map( elm => {      
      if(elm.patient === undefined) elm['patient'] = '';
      let aux = elm.patient.split(', ');            
      let aux2 = aux.map(elm => elm = elm.toLowerCase());    
      if (aux2.includes(temp.toLowerCase())) return filtered.push(elm);
      else return elm;        
    });
    return filtered;
}

module.exports = filterBySpecialtyHelper;