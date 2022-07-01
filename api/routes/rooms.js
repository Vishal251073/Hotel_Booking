import express from 'express';
import { createRoom,updateRoom,deleteRoom,getAllRoom,getRoom } from '../controller/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

///Create
router.post('/:hotelId',verifyAdmin,createRoom);
//Update

router.put('/:id',verifyAdmin,updateRoom);


//Delete


router.delete('/:id/:hotelId', verifyAdmin ,deleteRoom);


//Get

router.get('/:id', getRoom);


//Get All


router.get('/',getAllRoom);




export default router