const data = {
    "nodes": [
        {
            "_id": "6720c551c11e43b04a0a2e80",
            "name": "Natural Language Processing",
            "type": "specialization"
        },
        {
            "_id": "6720c55bc11e43b04a0a2e82",
            "name": "Research Department",
            "type": "department"
        },
        {
            "_id": "6720c56dc11e43b04a0a2e84",
            "name": "Data Science",
            "type": "field"
        },
        {
            "_id": "6720c575c11e43b04a0a2e86",
            "name": "Machine Learning",
            "type": "technology"
        },
        {
            "_id": "6720c57dc11e43b04a0a2e88",
            "name": "Kiplangat Korir",
            "type": "person"
        },
        {
            "_id": "6720c586c11e43b04a0a2e8a",
            "name": "GraphFusion",
            "type": "company"
        }
    ],
    "relationships": [
        {
            "_id": "6720c609c11e43b04a0a2e8f",
            "from": {
                "_id": "6720c551c11e43b04a0a2e80",
                "name": "Natural Language Processing",
                "type": "specialization"
            },
            "to": {
                "_id": "6720c55bc11e43b04a0a2e82",
                "name": "Research Department",
                "type": "department"
            }
        },
        {
            "_id": "6720c661c11e43b04a0a2e95",
            "from": {
                "_id": "6720c551c11e43b04a0a2e80",
                "name": "Natural Language Processing",
                "type": "specialization"
            },
            "to": {
                "_id": "6720c56dc11e43b04a0a2e84",
                "name": "Data Science",
                "type": "field"
            }
        },
        {
            "_id": "6720c6c4c11e43b04a0a2e97",
            "from": {
                "_id": "6720c55bc11e43b04a0a2e82",
                "name": "Research Department",
                "type": "department"
            },
            "to": {
                "_id": "6720c57dc11e43b04a0a2e88",
                "name": "Kiplangat Korir",
                "type": "person"
            }
        }
    ]
}