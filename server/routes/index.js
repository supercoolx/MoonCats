var express = require('express');
var router = express.Router();


metadatas = [
  {
    "ID": "1",
    "title": "Asset Metadata",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "Example NFT #001"
      },
      "description": {
        "type": "string",
        "description": "This is a testing NFT"
      },
      "image": {
        "type": "string",
        "description": "https://gateway.pinata.cloud/ipfs/QmS2U2VGE8BKajbSYN1iXPqUmv7bZ8eqsvhZ8sucZHURcw"
      }
    }
  },
  {
    "ID": "2",
    "title": "Asset Metadata",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "Example NFT #002"
      },
      "description": {
        "type": "string",
        "description": "This is a testing NFT"
      },
      "image": {
        "type": "string",
        "description": "https://gateway.pinata.cloud/ipfs/QmS2U2VGE8BKajbSYN1iXPqUmv7bZ8eqsvhZ8sucZHURcw"
      }
    }
  },
  {
    "ID": "3",
    "title": "Asset Metadata",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "Example NFT #003"
      },
      "description": {
        "type": "string",
        "description": "This is a testing NFT"
      },
      "image": {
        "type": "string",
        "description": "https://gateway.pinata.cloud/ipfs/QmS2U2VGE8BKajbSYN1iXPqUmv7bZ8eqsvhZ8sucZHURcw"
      }
    }
  }
]




router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})


// serve metadata by id
router.get('/:id', (req, res, next) => {

  // find the matching metadata
  metadatas.forEach(data => {
    if (data["ID"] == req.params.id) {
      console.log(data)

      // console.log(data["properties"]["image"]["description"])
      res.send(data)
    }
  })

  

})


module.exports = router
