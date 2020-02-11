/**
 * poliglota.js
 * Autor: the.thales (Thales Silva)
 * Data:  2020-02-11
 * 
 * pt-br
 * Leve biblioteca Javascript desenhada para facilitar a geração de conteúdo varíavel por lingua para páginas 
 * com suporte a várias linguas
 * 
 * en-us
 * Ligthweight client side processing JS library designed to facilitate the generation of 
 * variable content to multi language webpages.
 * 
 * 
 *  */

var poliglota = {
    language    : 'pt-br',
    data        : null,
    init        : function (l,j){
        /**
         * l    -> Language, see reference for complete list
         * j    -> JSON Obejcet or File URL
         */
        this.language = l;
        if(j.constructor == Object){
            this.data = Object;
        }else{
            httpGetAsync(j,poliglota.draw);
        }
        return this;
    },
    draw        : function(j){
        this.data = j;
        let e = document.querySelectorAll('[data-poli]');
        for (i = 0; i < e.length; i++){
            e[i].innerHTML = data[poliglota.language][e[i].dataset.poli]; 
        }
        return this;
    }
}

function httpGetAsync(url, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            callback(JSON.parse(xmlHttp.responseText));
        }  
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}