import express from "express";
import {addAlbum, listAlbum, removeAlbum} from '../controllers/AlbumController.js'
import upload from "../middleware/Multer.js";


const albumRouter = express.Router();

albumRouter.post('/add', upload.single('image'), addAlbum)
albumRouter.get('/list', listAlbum)
albumRouter.post('/remove', removeAlbum)


export default albumRouter;
