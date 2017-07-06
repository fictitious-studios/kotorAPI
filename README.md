# kotorAPI
An API for retrieving *"Star Wars: Knights of the Old Republic"* item and equipment data.

### Endpoints
| **Url** | **Description** | **Method** | **Response Format** | **Error Response** |
| :--- | :--- | :---: | :---: | --- |
| /resources        | *Fetch all.* <br>**resources:** armors, belts, gauntlets, implants, masks    | GET | JSON Array
| /resources/:id    | *Fetch by id.* <br>**resources:** armors, belts, gauntlets, implants, masks    | GET | JSON Object

### Example
```
.../armors/595ccd9b6a3ec483074159b2
```

```JSON
{
    "_id": "595ccd9b6a3ec483074159b2",
    "name": "Battle Armor",
    "defBonus": "8",
    "maxDexBonus": "1",
    "reqFeat": "5959b0ddf36d28163f1d9ec6",
    "imageURL": "https://cdn.wikimg.net/strategywiki/images/b/b4/KotOR_Item_Battle_Armor.png",
    "description": "This isn't the heaviest of armor, but it comes close. Designed for heavy militias, it has the protection needed to keep a soldier alive during ranged combat with massive weapons.",
    "damageResistance": {
        "cold": "0",
        "fire": "0",
        "sonic": "0",
        "electrical": "0",
        "bludgeoning": "0",
        "slashing": "0"
    },
    "attributes": {
        "strength": "0",
        "dexterity": "0",
        "constitution": "0",
        "intelligence": "0",
        "wisdom": "0",
        "charisma": "0"
    },
    "immunity": []
}
```
