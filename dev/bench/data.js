window.BENCHMARK_DATA = {
  "lastUpdate": 1720148000036,
  "repoUrl": "https://github.com/jackoelv/snarkVM",
  "entries": {
    "snarkVM Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "9260812+howardwu@users.noreply.github.com",
            "name": "Howard Wu",
            "username": "howardwu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f761d1e53eca2505c0b6a089e84636cbc21f0ad7",
          "message": "Merge pull request #2417 from AleoHQ/testnet3-staging\n\n[Mar 27 Backport] Theoretical Hotfix for `testnet3` branch",
          "timestamp": "2024-04-02T11:23:35-04:00",
          "tree_id": "3408c82ef3e3e46afaf639969e87441dc6daffbc",
          "url": "https://github.com/jackoelv/snarkVM/commit/f761d1e53eca2505c0b6a089e84636cbc21f0ad7"
        },
        "date": 1720147999509,
        "tool": "cargo",
        "benches": [
          {
            "name": "VariableBase MSM on BLS12-377 (10000)",
            "value": 65222707,
            "range": "± 1253102",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (100000)",
            "value": 426844878,
            "range": "± 9210710",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (200000)",
            "value": 798491264,
            "range": "± 33169115",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (300000)",
            "value": 1236636390,
            "range": "± 2463733",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (400000)",
            "value": 1573083901,
            "range": "± 5315397",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (500000)",
            "value": 1760007578,
            "range": "± 4413381",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (1000000)",
            "value": 3233733596,
            "range": "± 5542998",
            "unit": "ns/iter"
          },
          {
            "name": "VariableBase MSM on BLS12-377 (2000000)",
            "value": 5675794233,
            "range": "± 31812393",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (10000)",
            "value": 36230250,
            "range": "± 20545",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (100000)",
            "value": 250284635,
            "range": "± 398017",
            "unit": "ns/iter"
          },
          {
            "name": "Variable MSM on Edwards-BLS12 (1000000)",
            "value": 2098341226,
            "range": "± 6840992",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 100 native",
            "value": 1725314,
            "range": "± 4722",
            "unit": "ns/iter"
          },
          {
            "name": "PoseidonSponge<2, 1> Absorb 100 nonnative",
            "value": 6919229,
            "range": "± 128612",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add",
            "value": 1944796,
            "range": "± 8020",
            "unit": "ns/iter"
          },
          {
            "name": "LinearCombination::add_assign",
            "value": 125355,
            "range": "± 4340",
            "unit": "ns/iter"
          },
          {
            "name": "to_value",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "debug",
            "value": 264357452,
            "range": "± 5329873",
            "unit": "ns/iter"
          },
          {
            "name": "account_private_key",
            "value": 70051,
            "range": "± 912",
            "unit": "ns/iter"
          },
          {
            "name": "account_view_key",
            "value": 129053,
            "range": "± 3582",
            "unit": "ns/iter"
          },
          {
            "name": "account_address",
            "value": 160489,
            "range": "± 2670",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 1",
            "value": 50124,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 4 -> 2",
            "value": 50151,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 1",
            "value": 100233,
            "range": "± 1275",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 4",
            "value": 116799,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon2 Hash 10 -> 8",
            "value": 150295,
            "range": "± 4562",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 1",
            "value": 55630,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 4 -> 2",
            "value": 55691,
            "range": "± 1273",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 1",
            "value": 111370,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 4",
            "value": 111500,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon4 Hash 10 -> 8",
            "value": 139496,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 1",
            "value": 118229,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 4 -> 2",
            "value": 118292,
            "range": "± 519",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 1",
            "value": 178069,
            "range": "± 1018",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 4",
            "value": 177934,
            "range": "± 1049",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon8 Hash 10 -> 8",
            "value": 178033,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "Elligator2 - Field of 253-bits",
            "value": 125949,
            "range": "± 7033",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1",
            "value": 2445176,
            "range": "± 3211",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10",
            "value": 3717251,
            "range": "± 6946",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100",
            "value": 16170444,
            "range": "± 18570",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/1000",
            "value": 60026479,
            "range": "± 299065",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/10000",
            "value": 710720481,
            "range": "± 3638656",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/new/100000",
            "value": 6040781334,
            "range": "± 12813418",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1",
            "value": 2374227,
            "range": "± 4640",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10",
            "value": 3648713,
            "range": "± 13913",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100",
            "value": 16084700,
            "range": "± 103258",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/1000",
            "value": 59774845,
            "range": "± 142091",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/10000",
            "value": 712907081,
            "range": "± 2895798",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1/100000",
            "value": 6058268125,
            "range": "± 18871239",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1",
            "value": 2376579,
            "range": "± 2463",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10",
            "value": 4126903,
            "range": "± 3624",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100",
            "value": 15552323,
            "range": "± 97852",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/1000",
            "value": 59585196,
            "range": "± 180516",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/10000",
            "value": 709142227,
            "range": "± 2018860",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10/100000",
            "value": 6060315621,
            "range": "± 14677212",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1",
            "value": 2379964,
            "range": "± 8601",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10",
            "value": 3356074,
            "range": "± 3323",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100",
            "value": 18135550,
            "range": "± 50125",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/1000",
            "value": 86804743,
            "range": "± 164917",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/10000",
            "value": 705462933,
            "range": "± 2807322",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100/100000",
            "value": 6051952796,
            "range": "± 19337922",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1",
            "value": 2386396,
            "range": "± 10572",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10",
            "value": 3438955,
            "range": "± 4581",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100",
            "value": 43382010,
            "range": "± 102828",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/1000",
            "value": 61094417,
            "range": "± 140028",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/10000",
            "value": 679442819,
            "range": "± 2187750",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/1000/100000",
            "value": 6029496789,
            "range": "± 19045770",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1",
            "value": 2495485,
            "range": "± 30372",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10",
            "value": 3461382,
            "range": "± 19887",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100",
            "value": 14502593,
            "range": "± 56992",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/1000",
            "value": 59824722,
            "range": "± 147202",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/10000",
            "value": 903629140,
            "range": "± 11433444",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/10000/100000",
            "value": 5756551979,
            "range": "± 10308778",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1",
            "value": 4957837,
            "range": "± 63147",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10",
            "value": 5954941,
            "range": "± 68518",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100",
            "value": 16876037,
            "range": "± 59787",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/1000",
            "value": 62738549,
            "range": "± 304354",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/10000",
            "value": 524915020,
            "range": "± 1471110",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/append/100000/100000",
            "value": 6970307758,
            "range": "± 27200766",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1",
            "value": 2375364,
            "range": "± 2518",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10",
            "value": 24137869,
            "range": "± 122835",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/100",
            "value": 241555913,
            "range": "± 295183",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/1000",
            "value": 2414668662,
            "range": "± 7054278",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1/10000",
            "value": 24152061133,
            "range": "± 14749766",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1",
            "value": 2373714,
            "range": "± 4127",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10",
            "value": 24119701,
            "range": "± 25944",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/100",
            "value": 241331758,
            "range": "± 3341333",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/1000",
            "value": 2412404946,
            "range": "± 980150",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10/10000",
            "value": 24141719552,
            "range": "± 12851573",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1",
            "value": 2372777,
            "range": "± 4839",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10",
            "value": 24144456,
            "range": "± 30030",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/100",
            "value": 241391916,
            "range": "± 127745",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/1000",
            "value": 2414045992,
            "range": "± 6565584",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100/10000",
            "value": 24148610501,
            "range": "± 12635802",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1",
            "value": 2385932,
            "range": "± 83235",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10",
            "value": 24268639,
            "range": "± 30803",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/100",
            "value": 243100580,
            "range": "± 308566",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/1000",
            "value": 2431791649,
            "range": "± 3935290",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/1000/10000",
            "value": 24316822763,
            "range": "± 11694668",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1",
            "value": 2634226,
            "range": "± 54820",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10",
            "value": 26400220,
            "range": "± 25738",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/100",
            "value": 264255388,
            "range": "± 185502",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/1000",
            "value": 2647469168,
            "range": "± 4902352",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/10000/10000",
            "value": 26445816208,
            "range": "± 13269360",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1",
            "value": 4498141,
            "range": "± 146714",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10",
            "value": 38060319,
            "range": "± 2622896",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/100",
            "value": 421379304,
            "range": "± 314647",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/1000",
            "value": 4216805239,
            "range": "± 2683812",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update/100000/10000",
            "value": 42266283656,
            "range": "± 31330650",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1",
            "value": 2353551,
            "range": "± 18762",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #2",
            "value": 2354045,
            "range": "± 3127",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #3",
            "value": 2353736,
            "range": "± 2391",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #4",
            "value": 2353977,
            "range": "± 11652",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1/1 #5",
            "value": 2351805,
            "range": "± 3004",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/1",
            "value": 2353661,
            "range": "± 2331",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10",
            "value": 3318698,
            "range": "± 5863",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #2",
            "value": 3320170,
            "range": "± 38733",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #3",
            "value": 3319707,
            "range": "± 2009",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10/10 #4",
            "value": 3316378,
            "range": "± 1493",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/1",
            "value": 2354110,
            "range": "± 27057",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/10",
            "value": 3468446,
            "range": "± 8890",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100",
            "value": 14223132,
            "range": "± 19709",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #2",
            "value": 14219183,
            "range": "± 10166",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100/100 #3",
            "value": 14223715,
            "range": "± 14015",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1",
            "value": 2353535,
            "range": "± 11928",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/10",
            "value": 3471665,
            "range": "± 8176",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/100",
            "value": 14226370,
            "range": "± 43637",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000",
            "value": 59360134,
            "range": "± 82201",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/1000/1000 #2",
            "value": 59443523,
            "range": "± 159154",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1",
            "value": 2358140,
            "range": "± 2680",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/10",
            "value": 3394754,
            "range": "± 4885",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/100",
            "value": 15625616,
            "range": "± 25400",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/1000",
            "value": 65108598,
            "range": "± 208802",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/10000/8674",
            "value": 495437403,
            "range": "± 578022",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1",
            "value": 2491737,
            "range": "± 64120",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10",
            "value": 5007452,
            "range": "± 68093",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/100",
            "value": 27477673,
            "range": "± 60141",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/1000",
            "value": 120703153,
            "range": "± 293624",
            "unit": "ns/iter"
          },
          {
            "name": "MerkleTree/update_many/100000/10000",
            "value": 1104527799,
            "range": "± 1766590",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/1",
            "value": 2371159,
            "range": "± 4224",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/1",
            "value": 2339385,
            "range": "± 2544",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/2",
            "value": 2367805,
            "range": "± 1541",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/2",
            "value": 2337471,
            "range": "± 2746",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/3",
            "value": 2368453,
            "range": "± 3302",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/3",
            "value": 2339245,
            "range": "± 4740",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/4",
            "value": 2373909,
            "range": "± 2509",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/4",
            "value": 2339979,
            "range": "± 2750",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/5",
            "value": 2370498,
            "range": "± 1157",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/5",
            "value": 2338808,
            "range": "± 2326",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/6",
            "value": 2372333,
            "range": "± 6009",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/6",
            "value": 2339630,
            "range": "± 2830",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/7",
            "value": 2373824,
            "range": "± 2452",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/7",
            "value": 2338779,
            "range": "± 14505",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/8",
            "value": 2375302,
            "range": "± 1923",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/8",
            "value": 2340890,
            "range": "± 14753",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/9",
            "value": 2374735,
            "range": "± 1800",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/9",
            "value": 2341737,
            "range": "± 26887",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/10",
            "value": 2379349,
            "range": "± 2928",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/10",
            "value": 2340622,
            "range": "± 7970",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/11",
            "value": 2387006,
            "range": "± 4732",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/11",
            "value": 2341359,
            "range": "± 10559",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/12",
            "value": 2406254,
            "range": "± 9176",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/12",
            "value": 2341388,
            "range": "± 1771",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/13",
            "value": 2444067,
            "range": "± 21172",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/13",
            "value": 2341756,
            "range": "± 2086",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/14",
            "value": 2465770,
            "range": "± 21824",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/14",
            "value": 2343480,
            "range": "± 9447",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/15",
            "value": 2803826,
            "range": "± 75457",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/15",
            "value": 2347165,
            "range": "± 6242",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Single/16",
            "value": 3078360,
            "range": "± 104045",
            "unit": "ns/iter"
          },
          {
            "name": "UpdateVSUpdateMany/Batch/16",
            "value": 2383059,
            "range": "± 49287",
            "unit": "ns/iter"
          },
          {
            "name": "group_from_field",
            "value": 92274358,
            "range": "± 3235207",
            "unit": "ns/iter"
          },
          {
            "name": "group_from_field_on_curve",
            "value": 151788166,
            "range": "± 1636799",
            "unit": "ns/iter"
          },
          {
            "name": "group_from_field_off_curve",
            "value": 12341522,
            "range": "± 15355",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_rand",
            "value": 143044,
            "range": "± 2607",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_mul_assign",
            "value": 153003,
            "range": "± 1328",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign",
            "value": 851,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_add_assign_mixed",
            "value": 591,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_double",
            "value": 365,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g1_is_in_correct_subgroup",
            "value": 62576,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_rand",
            "value": 1361727,
            "range": "± 11699",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_mul_assign",
            "value": 374459,
            "range": "± 2206",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign",
            "value": 3329,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_add_assign_mixed",
            "value": 2296,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: g2_double",
            "value": 1345,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_add_nocarry",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_sub_noborrow",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_num_bits",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_mul2",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_repr_div2",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_add_assign",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_sub_assign",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_mul_assign",
            "value": 56,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_double",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_square",
            "value": 52,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_inverse",
            "value": 8636,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_negate",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_sqrt",
            "value": 61977,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_to_bigint",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq_from_bigint",
            "value": 56,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_add_assign",
            "value": 72,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_sub_assign",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_mul_assign",
            "value": 4931,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_double",
            "value": 62,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_square",
            "value": 3434,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq12_inverse",
            "value": 16855,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_add_assign",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sub_assign",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_mul_assign",
            "value": 212,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_double",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_square",
            "value": 128,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_inverse",
            "value": 8839,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fq2_sqrt",
            "value": 102877,
            "range": "± 4356",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_add_nocarry",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_sub_noborrow",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_num_bits",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_mul2",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_repr_div2",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_add_assign",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_sub_assign",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_mul_assign",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_double",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_square",
            "value": 25,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_inverse",
            "value": 4584,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_negate",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_sqrt",
            "value": 22393,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_to_bigint",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: fr_from_bigint",
            "value": 29,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_miller_loop",
            "value": 458879,
            "range": "± 10174",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_final_exponentiation",
            "value": 873295,
            "range": "± 1509",
            "unit": "ns/iter"
          },
          {
            "name": "bls12_377: pairing_full",
            "value": 1509036,
            "range": "± 6217",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_bytes_le",
            "value": 26341,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "Block::serialize (bincode)",
            "value": 53956,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "Block::to_string (serde_json)",
            "value": 202456,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_bytes_le",
            "value": 26992717,
            "range": "± 128503",
            "unit": "ns/iter"
          },
          {
            "name": "Block::deserialize (bincode)",
            "value": 27057094,
            "range": "± 112626",
            "unit": "ns/iter"
          },
          {
            "name": "Block::from_str (serde_json)",
            "value": 28357990,
            "range": "± 180407",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_bytes_le",
            "value": 226,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Header::serialize (bincode)",
            "value": 461,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Header::to_string (serde_json)",
            "value": 3095,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_bytes_le",
            "value": 151,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Header::deserialize (bincode)",
            "value": 309,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Header::from_str (serde_json)",
            "value": 25756,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_bytes_le",
            "value": 26201,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::serialize (bincode)",
            "value": 52268,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::to_string (serde_json)",
            "value": 189293,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_bytes_le",
            "value": 23610467,
            "range": "± 89309",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::deserialize (bincode)",
            "value": 23592672,
            "range": "± 53031",
            "unit": "ns/iter"
          },
          {
            "name": "Transactions::from_str (serde_json)",
            "value": 24833009,
            "range": "± 60336",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_bytes_le",
            "value": 6577,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::serialize (bincode)",
            "value": 13216,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::to_string (serde_json)",
            "value": 47777,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_bytes_le",
            "value": 5763431,
            "range": "± 22883",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::deserialize (bincode)",
            "value": 5786926,
            "range": "± 22871",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::from_str (serde_json)",
            "value": 6099105,
            "range": "± 19032",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_bytes_le",
            "value": 1639,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::serialize (bincode)",
            "value": 3371,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::to_string (serde_json)",
            "value": 10118,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_bytes_le",
            "value": 1062170,
            "range": "± 1653",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::deserialize (bincode)",
            "value": 1064073,
            "range": "± 2640",
            "unit": "ns/iter"
          },
          {
            "name": "Transition::from_str (serde_json)",
            "value": 1175955,
            "range": "± 4165",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::Deploy",
            "value": 20478934150,
            "range": "± 68470962",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::Deploy - verify",
            "value": 28079047,
            "range": "± 13280634",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::Execute(transfer_public)",
            "value": 4504403831,
            "range": "± 37631060",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::Execute(transfer_public) - verify",
            "value": 13157183,
            "range": "± 102024",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::Execute(transfer_private)",
            "value": 19099858084,
            "range": "± 82760126",
            "unit": "ns/iter"
          },
          {
            "name": "Transaction::Execute(transfer_private) - verify",
            "value": 13064848,
            "range": "± 51021",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Trim 2^13",
            "value": 4711331634,
            "range": "± 77429754",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Prove 2^13",
            "value": 195392941,
            "range": "± 325884",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 10 of 2^13",
            "value": 89282961,
            "range": "± 497489",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 100 of 2^13",
            "value": 870226585,
            "range": "± 4576239",
            "unit": "ns/iter"
          },
          {
            "name": "CoinbasePuzzle::Verify 256 of 2^13",
            "value": 2215329080,
            "range": "± 9485271",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}