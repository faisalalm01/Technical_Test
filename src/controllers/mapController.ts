import { Request, Response } from 'express';
import { createLocationService, deleteLocationService, getAllLocationsService, getLocationById, updateLocationService } from '../service/mapService';

export const getLocations = async (req: Request, res: Response) => {
    try {
        const locations = await getAllLocationsService();
        res.render('Layout', {
            locations,
            apiKey: process.env.GOOGLE_MAPS_API_KEY, 
            title: 'Home',
            body: 'Home'
        });
    } catch (err) {
        res.status(500).send('Failed to load locations');
    }
};

export const AddPageLocation = (req: Request, res: Response) => {
    res.render('Layout', {
        title: 'location - Add',
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
        body: 'AddLocation'
    });
};

export const EditPageLocation = async (req: Request, res: Response) => {
    const { id } = req.params;
    const location = await getLocationById(id);
    if (!location) {
        res.status(404).send('Location not found');
    }
    res.render('Layout', {
        title: 'location - Edit',
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
        body: 'EditLocation',
        location,
    });
};

export const addLocation = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, latitude, longitude, address, description } = req.body;
        if (!name || !address || !description || isNaN(latitude) || isNaN(longitude)) {
            return res.status(400).json({ message: "Name, Address, Description are required. Latitude and Longitude must be valid numbers." });
        }
        await createLocationService({
            name,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            address,
            description,
        });
        // res.redirect('/');
        res.send({
            msg: 'success create location',
            data: {name, address, description}
        })
    } catch (err) {
        res.status(500).send('Failed to create location');
    }
};

export const editLocation = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const { name, latitude, longitude, address, description } = req.body;
        if (!name || !address || !description || isNaN(latitude) || isNaN(longitude)) {
            return res.status(400).json({ message: "Name, Address, Description are required. Latitude and Longitude must be valid numbers." });
        }
        await updateLocationService(id, {
            name,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            address,
            description
        });
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Failed to update location');
    }
};

export const deleteLocation = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deleteLocationService(id);
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Failed to delete location')
    }
};