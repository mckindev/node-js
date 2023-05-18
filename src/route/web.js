import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initwebroute = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/contact', (req, res) => {
        res.send('hi contact');
    })
    return app.use('/', router)
      
}


export default initwebroute;
