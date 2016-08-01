module.exports = {
    seedKey : "alarm multiply pen walnut seminar prison cluster used immense gate glare try",
    myAddress : "0x300221400d539cb5d15940c56239e6353287eba2",
    registryAddress: "0x11da1ff17b25c2b2edc3c10d76cb962eb1b84fdf",
    registryABI: [{"constant":true,"inputs":[],"name":"registrarAddress","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_ids","type":"bytes32[]"},{"name":"_data","type":"bytes32[]"},{"name":"_schemaIndex","type":"uint88"}],"name":"createThing","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"bytes32[]"}],"name":"thingExist","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"schemas","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"idToThing","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32[]"},{"name":"_newIds","type":"bytes32[]"}],"name":"addIdentities","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_schema","type":"string"}],"name":"createSchema","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_registrarAddress","type":"address"}],"name":"configure","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_ids","type":"bytes32[]"},{"name":"_idsPerThing","type":"uint16[]"},{"name":"_data","type":"bytes32[]"},{"name":"_dataLength","type":"uint16[]"},{"name":"_schemaIndex","type":"uint88"}],"name":"createThings","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getThingByIndexDEBUG","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint88"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32[]"},{"name":"_isValid","type":"bool"}],"name":"setThingValid","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32[]"},{"name":"_data","type":"bytes32[]"},{"name":"_schemaIndex","type":"uint88"}],"name":"updateThingData","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32[]"}],"name":"deleteThing","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"bytes32[]"}],"name":"getThing","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint88"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"things","outputs":[{"name":"ownerAddress","type":"address"},{"name":"schemaIndex","type":"uint88"},{"name":"isValid","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"ids","type":"bytes32[]"},{"indexed":true,"name":"owner","type":"address"}],"name":"Created","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"ids","type":"bytes32[]"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"isValid","type":"bool"}],"name":"Updated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"ids","type":"bytes32[]"},{"indexed":true,"name":"owner","type":"address"}],"name":"Deleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"code","type":"uint256"},{"indexed":false,"name":"reference","type":"bytes32[]"}],"name":"Error","type":"event"}],
    registrarAddress: "0xa0c43dde2b0daa312dd28e869f97d47470b86f16",
    registrarABI: [{"constant":true,"inputs":[],"name":"getRegistrants","outputs":[{"name":"","type":"address[]"}],"type":"function"},{"constant":true,"inputs":[{"name":"_registrant","type":"address"}],"name":"isActiveRegistrant","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"registrantIndex","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_registrant","type":"address"},{"name":"_data","type":"string"}],"name":"add","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"registrants","outputs":[{"name":"addr","type":"address"},{"name":"data","type":"string"},{"name":"active","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"certificationAuthority","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_ca","type":"address"}],"name":"setNextAuthority","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_registrant","type":"address"},{"name":"_data","type":"string"},{"name":"_active","type":"bool"}],"name":"edit","outputs":[{"name":"","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"registrant","type":"address"},{"indexed":false,"name":"authority","type":"address"},{"indexed":false,"name":"data","type":"string"}],"name":"Creation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"registrant","type":"address"},{"indexed":false,"name":"authority","type":"address"},{"indexed":false,"name":"data","type":"string"},{"indexed":false,"name":"active","type":"bool"}],"name":"Update","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"code","type":"uint256"}],"name":"Error","type":"event"}],
    //Testnet: http://52.28.142.166:8555
    //Livenet: http://node.ambisafe.co
    urlProvider: "http://52.28.142.166:8555",
    fromBlock: 1360000
}
