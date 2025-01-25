import { Router } from 'express';
import { getLocations, addLocation, editLocation, AddPageLocation, EditPageLocation, deleteLocation } from '../controllers/mapController';

const mapRoutes = Router();

mapRoutes.get('/', getLocations);
mapRoutes.get('/create', AddPageLocation);
mapRoutes.post('/create', addLocation);
mapRoutes.get('/update/:id', EditPageLocation);
mapRoutes.post('/update/:id', editLocation);
mapRoutes.delete("/delete/:id", deleteLocation);

export default mapRoutes;