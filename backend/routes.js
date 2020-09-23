const router = require('express').Router();
const fs = require('fs');

router.route('/save').post((req, res) => {

    console.log(req.body);
    const data = req.body;

    let jsonData = JSON.stringify(data, null, 2);

    fs.writeFileSync('person.json', jsonData);
});

router.route('/get').get((req, res) => {
    let rawData = fs.readFileSync('person.json');

    if(rawData != null){
        let data = JSON.parse(rawData);

        res.status(200);
        res.json(data);
    }


});

module.exports = router;