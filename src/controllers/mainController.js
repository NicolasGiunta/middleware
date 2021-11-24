const express = require ('express');
//const path = require ('path');

const mainController = {
    index: (req, res)=>{
        res.render ('index')
    },
    
    admin: (req, res) => {
        
    }
}

    module.exports = mainController;