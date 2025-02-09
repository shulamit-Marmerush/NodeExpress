import express from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint לקבלת רשימת האפליקציות
app.get('/', async (req, res) => {
    try {
        const apiKey = 'rnd_RSUH32z2N8gBuccUJFEPVLah3l2P'; // הכנס את ה-API Key שלך כאן
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching services');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
