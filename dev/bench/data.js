window.BENCHMARK_DATA = {
  "lastUpdate": 1793812259217,
  "repoUrl": "https://github.com/noir-lang/bigint",
  "entries": {
    "ACIR Opcodes": [
      {
        "commit": {
          "author": {
            "email": "15848336+TomAFrench@users.noreply.github.com",
            "name": "Tom French",
            "username": "TomAFrench"
          },
          "committer": {
            "email": "15848336+TomAFrench@users.noreply.github.com",
            "name": "Tom French",
            "username": "TomAFrench"
          },
          "distinct": true,
          "id": "233ab3746e837894f5166417aed262866f0eace8",
          "message": "feat!: remove U384 and U768\n\nTests which used `U384` as a multi-limb type now use `U512`.\n\nBREAKING CHANGE: the `U384` and `U768` types are removed.",
          "timestamp": "2026-11-04T16:40:17Z",
          "tree_id": "df4c162de3ace27421a35cb207ab416bc973a561",
          "url": "https://github.com/noir-lang/bigint/commit/233ab3746e837894f5166417aed262866f0eace8"
        },
        "date": 1793812164306,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "add_U2048_Bench.json/main",
            "value": 126,
            "unit": "acir_opcodes"
          },
          {
            "name": "add_U256_Bench.json/main",
            "value": 21,
            "unit": "acir_opcodes"
          },
          {
            "name": "add_U512_Bench.json/main",
            "value": 35,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U2048_Bench.json/main",
            "value": 45,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U256_Bench.json/main",
            "value": 15,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U512_Bench.json/main",
            "value": 19,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench.json/main",
            "value": 27,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U256_Bench.json/main",
            "value": 10,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U512_Bench.json/main",
            "value": 13,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_integer_U2048_Bench.json/main",
            "value": 20,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_integer_U256_Bench.json/main",
            "value": 5,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_integer_U512_Bench.json/main",
            "value": 7,
            "unit": "acir_opcodes"
          },
          {
            "name": "cmp_U2048_Bench.json/main",
            "value": 187,
            "unit": "acir_opcodes"
          },
          {
            "name": "cmp_U256_Bench.json/main",
            "value": 37,
            "unit": "acir_opcodes"
          },
          {
            "name": "cmp_U512_Bench.json/main",
            "value": 57,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U2048_Bench.json/main",
            "value": 8707,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 1462,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 2428,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U2048_Bench.json/main",
            "value": 329,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U256_Bench.json/main",
            "value": 59,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U512_Bench.json/main",
            "value": 95,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U2048_Bench.json/main",
            "value": 184,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U256_Bench.json/main",
            "value": 34,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U512_Bench.json/main",
            "value": 54,
            "unit": "acir_opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U2048_Bench.json/main",
            "value": 363,
            "unit": "acir_opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U256_Bench.json/main",
            "value": 63,
            "unit": "acir_opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U512_Bench.json/main",
            "value": 103,
            "unit": "acir_opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U2048_Bench.json/main",
            "value": 511,
            "unit": "acir_opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U256_Bench.json/main",
            "value": 91,
            "unit": "acir_opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U512_Bench.json/main",
            "value": 147,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U2048_Bench.json/main",
            "value": 311,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U256_Bench.json/main",
            "value": 42,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U512_Bench.json/main",
            "value": 80,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_field_U2048_Bench.json/main",
            "value": 94,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_field_U256_Bench.json/main",
            "value": 19,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_field_U512_Bench.json/main",
            "value": 29,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U2048_Bench.json/main",
            "value": 311,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U256_Bench.json/main",
            "value": 42,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U512_Bench.json/main",
            "value": 80,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U2048_Bench.json/main",
            "value": 94,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U256_Bench.json/main",
            "value": 19,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U512_Bench.json/main",
            "value": 29,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_integer_U2048_Bench.json/main",
            "value": 23,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_integer_U256_Bench.json/main",
            "value": 8,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_integer_U512_Bench.json/main",
            "value": 10,
            "unit": "acir_opcodes"
          },
          {
            "name": "mul_U2048_Bench.json/main",
            "value": 195,
            "unit": "acir_opcodes"
          },
          {
            "name": "mul_U256_Bench.json/main",
            "value": 30,
            "unit": "acir_opcodes"
          },
          {
            "name": "mul_U512_Bench.json/main",
            "value": 52,
            "unit": "acir_opcodes"
          },
          {
            "name": "neg_U2048_Bench.json/main",
            "value": 108,
            "unit": "acir_opcodes"
          },
          {
            "name": "neg_U256_Bench.json/main",
            "value": 18,
            "unit": "acir_opcodes"
          },
          {
            "name": "neg_U512_Bench.json/main",
            "value": 30,
            "unit": "acir_opcodes"
          },
          {
            "name": "pow_U2048_Bench.json/main",
            "value": 73,
            "unit": "acir_opcodes"
          },
          {
            "name": "pow_U256_Bench.json/main",
            "value": 13,
            "unit": "acir_opcodes"
          },
          {
            "name": "pow_U512_Bench.json/main",
            "value": 21,
            "unit": "acir_opcodes"
          },
          {
            "name": "sub_U2048_Bench.json/main",
            "value": 126,
            "unit": "acir_opcodes"
          },
          {
            "name": "sub_U256_Bench.json/main",
            "value": 21,
            "unit": "acir_opcodes"
          },
          {
            "name": "sub_U512_Bench.json/main",
            "value": 35,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U2048_Bench.json/main",
            "value": 568,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U256_Bench.json/main",
            "value": 75,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U512_Bench.json/main",
            "value": 145,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_field_U2048_Bench.json/main",
            "value": 75,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_field_U256_Bench.json/main",
            "value": 15,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_field_U512_Bench.json/main",
            "value": 23,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U2048_Bench.json/main",
            "value": 568,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U256_Bench.json/main",
            "value": 75,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U512_Bench.json/main",
            "value": 145,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U2048_Bench.json/main",
            "value": 347,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U256_Bench.json/main",
            "value": 62,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U512_Bench.json/main",
            "value": 100,
            "unit": "acir_opcodes"
          },
          {
            "name": "validate_canonical_U2048_Bench.json/main",
            "value": 74,
            "unit": "acir_opcodes"
          },
          {
            "name": "validate_canonical_U256_Bench.json/main",
            "value": 14,
            "unit": "acir_opcodes"
          },
          {
            "name": "validate_canonical_U512_Bench.json/main",
            "value": 22,
            "unit": "acir_opcodes"
          },
          {
            "name": "validate_in_range_U2048_Bench.json/main",
            "value": 18,
            "unit": "acir_opcodes"
          },
          {
            "name": "validate_in_range_U256_Bench.json/main",
            "value": 3,
            "unit": "acir_opcodes"
          },
          {
            "name": "validate_in_range_U512_Bench.json/main",
            "value": 5,
            "unit": "acir_opcodes"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "15848336+TomAFrench@users.noreply.github.com",
            "name": "Tom French",
            "username": "TomAFrench"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84dff00526dfb9131132b6d1d1ccbccd075ffc55",
          "message": "chore(ci): grant actions: write to the benchmark workflow (#3)\n\n* fix(ci): grant actions: read to the benchmark workflow\n\nnoir-gates-diff lists workflow artifacts to find the gates report from the base branch. As this repository is internal, the GITHUB_TOKEN needs an explicit actions: read grant for this, which the job's permissions block did not include.\n\n* chore(ci): grant actions: write instead of read",
          "timestamp": "2026-11-05T01:10:32+08:00",
          "tree_id": "538ee07bfbe1767dec36864c1ee654eac61e8728",
          "url": "https://github.com/noir-lang/bigint/commit/84dff00526dfb9131132b6d1d1ccbccd075ffc55"
        },
        "date": 1793812256592,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "add_U2048_Bench.json/main",
            "value": 126,
            "unit": "acir_opcodes"
          },
          {
            "name": "add_U256_Bench.json/main",
            "value": 21,
            "unit": "acir_opcodes"
          },
          {
            "name": "add_U512_Bench.json/main",
            "value": 35,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U2048_Bench.json/main",
            "value": 45,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U256_Bench.json/main",
            "value": 15,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U512_Bench.json/main",
            "value": 19,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench.json/main",
            "value": 27,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U256_Bench.json/main",
            "value": 10,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U512_Bench.json/main",
            "value": 13,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_integer_U2048_Bench.json/main",
            "value": 20,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_integer_U256_Bench.json/main",
            "value": 5,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_integer_U512_Bench.json/main",
            "value": 7,
            "unit": "acir_opcodes"
          },
          {
            "name": "cmp_U2048_Bench.json/main",
            "value": 187,
            "unit": "acir_opcodes"
          },
          {
            "name": "cmp_U256_Bench.json/main",
            "value": 37,
            "unit": "acir_opcodes"
          },
          {
            "name": "cmp_U512_Bench.json/main",
            "value": 57,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U2048_Bench.json/main",
            "value": 8707,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 1462,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 2428,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U2048_Bench.json/main",
            "value": 329,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U256_Bench.json/main",
            "value": 59,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U512_Bench.json/main",
            "value": 95,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U2048_Bench.json/main",
            "value": 184,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U256_Bench.json/main",
            "value": 34,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U512_Bench.json/main",
            "value": 54,
            "unit": "acir_opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U2048_Bench.json/main",
            "value": 363,
            "unit": "acir_opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U256_Bench.json/main",
            "value": 63,
            "unit": "acir_opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U512_Bench.json/main",
            "value": 103,
            "unit": "acir_opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U2048_Bench.json/main",
            "value": 511,
            "unit": "acir_opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U256_Bench.json/main",
            "value": 91,
            "unit": "acir_opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U512_Bench.json/main",
            "value": 147,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U2048_Bench.json/main",
            "value": 311,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U256_Bench.json/main",
            "value": 42,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U512_Bench.json/main",
            "value": 80,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_field_U2048_Bench.json/main",
            "value": 94,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_field_U256_Bench.json/main",
            "value": 19,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_field_U512_Bench.json/main",
            "value": 29,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U2048_Bench.json/main",
            "value": 311,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U256_Bench.json/main",
            "value": 42,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U512_Bench.json/main",
            "value": 80,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U2048_Bench.json/main",
            "value": 94,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U256_Bench.json/main",
            "value": 19,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U512_Bench.json/main",
            "value": 29,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_integer_U2048_Bench.json/main",
            "value": 23,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_integer_U256_Bench.json/main",
            "value": 8,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_integer_U512_Bench.json/main",
            "value": 10,
            "unit": "acir_opcodes"
          },
          {
            "name": "mul_U2048_Bench.json/main",
            "value": 195,
            "unit": "acir_opcodes"
          },
          {
            "name": "mul_U256_Bench.json/main",
            "value": 30,
            "unit": "acir_opcodes"
          },
          {
            "name": "mul_U512_Bench.json/main",
            "value": 52,
            "unit": "acir_opcodes"
          },
          {
            "name": "neg_U2048_Bench.json/main",
            "value": 108,
            "unit": "acir_opcodes"
          },
          {
            "name": "neg_U256_Bench.json/main",
            "value": 18,
            "unit": "acir_opcodes"
          },
          {
            "name": "neg_U512_Bench.json/main",
            "value": 30,
            "unit": "acir_opcodes"
          },
          {
            "name": "pow_U2048_Bench.json/main",
            "value": 73,
            "unit": "acir_opcodes"
          },
          {
            "name": "pow_U256_Bench.json/main",
            "value": 13,
            "unit": "acir_opcodes"
          },
          {
            "name": "pow_U512_Bench.json/main",
            "value": 21,
            "unit": "acir_opcodes"
          },
          {
            "name": "sub_U2048_Bench.json/main",
            "value": 126,
            "unit": "acir_opcodes"
          },
          {
            "name": "sub_U256_Bench.json/main",
            "value": 21,
            "unit": "acir_opcodes"
          },
          {
            "name": "sub_U512_Bench.json/main",
            "value": 35,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U2048_Bench.json/main",
            "value": 568,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U256_Bench.json/main",
            "value": 75,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U512_Bench.json/main",
            "value": 145,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_field_U2048_Bench.json/main",
            "value": 75,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_field_U256_Bench.json/main",
            "value": 15,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_field_U512_Bench.json/main",
            "value": 23,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U2048_Bench.json/main",
            "value": 568,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U256_Bench.json/main",
            "value": 75,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U512_Bench.json/main",
            "value": 145,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U2048_Bench.json/main",
            "value": 347,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U256_Bench.json/main",
            "value": 62,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U512_Bench.json/main",
            "value": 100,
            "unit": "acir_opcodes"
          },
          {
            "name": "validate_canonical_U2048_Bench.json/main",
            "value": 74,
            "unit": "acir_opcodes"
          },
          {
            "name": "validate_canonical_U256_Bench.json/main",
            "value": 14,
            "unit": "acir_opcodes"
          },
          {
            "name": "validate_canonical_U512_Bench.json/main",
            "value": 22,
            "unit": "acir_opcodes"
          },
          {
            "name": "validate_in_range_U2048_Bench.json/main",
            "value": 18,
            "unit": "acir_opcodes"
          },
          {
            "name": "validate_in_range_U256_Bench.json/main",
            "value": 3,
            "unit": "acir_opcodes"
          },
          {
            "name": "validate_in_range_U512_Bench.json/main",
            "value": 5,
            "unit": "acir_opcodes"
          }
        ]
      }
    ],
    "Circuit Size": [
      {
        "commit": {
          "author": {
            "email": "15848336+TomAFrench@users.noreply.github.com",
            "name": "Tom French",
            "username": "TomAFrench"
          },
          "committer": {
            "email": "15848336+TomAFrench@users.noreply.github.com",
            "name": "Tom French",
            "username": "TomAFrench"
          },
          "distinct": true,
          "id": "233ab3746e837894f5166417aed262866f0eace8",
          "message": "feat!: remove U384 and U768\n\nTests which used `U384` as a multi-limb type now use `U512`.\n\nBREAKING CHANGE: the `U384` and `U768` types are removed.",
          "timestamp": "2026-11-04T16:40:17Z",
          "tree_id": "df4c162de3ace27421a35cb207ab416bc973a561",
          "url": "https://github.com/noir-lang/bigint/commit/233ab3746e837894f5166417aed262866f0eace8"
        },
        "date": 1793812167998,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "add_U2048_Bench.json/main",
            "value": 3325,
            "unit": "circuit_size"
          },
          {
            "name": "add_U256_Bench.json/main",
            "value": 2879,
            "unit": "circuit_size"
          },
          {
            "name": "add_U512_Bench.json/main",
            "value": 2931,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U2048_Bench.json/main",
            "value": 3009,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U256_Bench.json/main",
            "value": 2805,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U512_Bench.json/main",
            "value": 2833,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench.json/main",
            "value": 2887,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U256_Bench.json/main",
            "value": 2783,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U512_Bench.json/main",
            "value": 2796,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_integer_U2048_Bench.json/main",
            "value": 2893,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_integer_U256_Bench.json/main",
            "value": 2780,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_integer_U512_Bench.json/main",
            "value": 2794,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U2048_Bench.json/main",
            "value": 3351,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U256_Bench.json/main",
            "value": 2890,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U512_Bench.json/main",
            "value": 2944,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U2048_Bench.json/main",
            "value": 13458,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 4696,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 6127,
            "unit": "circuit_size"
          },
          {
            "name": "div_U2048_Bench.json/main",
            "value": 4167,
            "unit": "circuit_size"
          },
          {
            "name": "div_U256_Bench.json/main",
            "value": 2943,
            "unit": "circuit_size"
          },
          {
            "name": "div_U512_Bench.json/main",
            "value": 3077,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U2048_Bench.json/main",
            "value": 3352,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U256_Bench.json/main",
            "value": 2886,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U512_Bench.json/main",
            "value": 2941,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U2048_Bench.json/main",
            "value": 4165,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U256_Bench.json/main",
            "value": 3040,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U512_Bench.json/main",
            "value": 3426,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U2048_Bench.json/main",
            "value": 5248,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U256_Bench.json/main",
            "value": 3120,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U512_Bench.json/main",
            "value": 3588,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U2048_Bench.json/main",
            "value": 3337,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U256_Bench.json/main",
            "value": 2873,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U512_Bench.json/main",
            "value": 2938,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U2048_Bench.json/main",
            "value": 3160,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U256_Bench.json/main",
            "value": 2844,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U512_Bench.json/main",
            "value": 2879,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U2048_Bench.json/main",
            "value": 3337,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U256_Bench.json/main",
            "value": 2873,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U512_Bench.json/main",
            "value": 2938,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U2048_Bench.json/main",
            "value": 2938,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U256_Bench.json/main",
            "value": 2790,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U512_Bench.json/main",
            "value": 2809,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_integer_U2048_Bench.json/main",
            "value": 2885,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_integer_U256_Bench.json/main",
            "value": 2782,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_integer_U512_Bench.json/main",
            "value": 2795,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U2048_Bench.json/main",
            "value": 3835,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U256_Bench.json/main",
            "value": 2987,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U512_Bench.json/main",
            "value": 3336,
            "unit": "circuit_size"
          },
          {
            "name": "neg_U2048_Bench.json/main",
            "value": 3208,
            "unit": "circuit_size"
          },
          {
            "name": "neg_U256_Bench.json/main",
            "value": 2858,
            "unit": "circuit_size"
          },
          {
            "name": "neg_U512_Bench.json/main",
            "value": 2897,
            "unit": "circuit_size"
          },
          {
            "name": "pow_U2048_Bench.json/main",
            "value": 3145,
            "unit": "circuit_size"
          },
          {
            "name": "pow_U256_Bench.json/main",
            "value": 2821,
            "unit": "circuit_size"
          },
          {
            "name": "pow_U512_Bench.json/main",
            "value": 2865,
            "unit": "circuit_size"
          },
          {
            "name": "sub_U2048_Bench.json/main",
            "value": 3325,
            "unit": "circuit_size"
          },
          {
            "name": "sub_U256_Bench.json/main",
            "value": 2879,
            "unit": "circuit_size"
          },
          {
            "name": "sub_U512_Bench.json/main",
            "value": 2931,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U2048_Bench.json/main",
            "value": 3843,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U256_Bench.json/main",
            "value": 2942,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U512_Bench.json/main",
            "value": 3069,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U2048_Bench.json/main",
            "value": 3125,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U256_Bench.json/main",
            "value": 2839,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U512_Bench.json/main",
            "value": 2870,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U2048_Bench.json/main",
            "value": 3843,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U256_Bench.json/main",
            "value": 2942,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U512_Bench.json/main",
            "value": 3069,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U2048_Bench.json/main",
            "value": 4203,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U256_Bench.json/main",
            "value": 2949,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U512_Bench.json/main",
            "value": 3087,
            "unit": "circuit_size"
          },
          {
            "name": "validate_canonical_U2048_Bench.json/main",
            "value": 3155,
            "unit": "circuit_size"
          },
          {
            "name": "validate_canonical_U256_Bench.json/main",
            "value": 2850,
            "unit": "circuit_size"
          },
          {
            "name": "validate_canonical_U512_Bench.json/main",
            "value": 2883,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U2048_Bench.json/main",
            "value": 2979,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U256_Bench.json/main",
            "value": 2817,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U512_Bench.json/main",
            "value": 2832,
            "unit": "circuit_size"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "15848336+TomAFrench@users.noreply.github.com",
            "name": "Tom French",
            "username": "TomAFrench"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84dff00526dfb9131132b6d1d1ccbccd075ffc55",
          "message": "chore(ci): grant actions: write to the benchmark workflow (#3)\n\n* fix(ci): grant actions: read to the benchmark workflow\n\nnoir-gates-diff lists workflow artifacts to find the gates report from the base branch. As this repository is internal, the GITHUB_TOKEN needs an explicit actions: read grant for this, which the job's permissions block did not include.\n\n* chore(ci): grant actions: write instead of read",
          "timestamp": "2026-11-05T01:10:32+08:00",
          "tree_id": "538ee07bfbe1767dec36864c1ee654eac61e8728",
          "url": "https://github.com/noir-lang/bigint/commit/84dff00526dfb9131132b6d1d1ccbccd075ffc55"
        },
        "date": 1793812259190,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "add_U2048_Bench.json/main",
            "value": 3325,
            "unit": "circuit_size"
          },
          {
            "name": "add_U256_Bench.json/main",
            "value": 2879,
            "unit": "circuit_size"
          },
          {
            "name": "add_U512_Bench.json/main",
            "value": 2931,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U2048_Bench.json/main",
            "value": 3009,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U256_Bench.json/main",
            "value": 2805,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U512_Bench.json/main",
            "value": 2833,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench.json/main",
            "value": 2887,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U256_Bench.json/main",
            "value": 2783,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U512_Bench.json/main",
            "value": 2796,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_integer_U2048_Bench.json/main",
            "value": 2893,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_integer_U256_Bench.json/main",
            "value": 2780,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_integer_U512_Bench.json/main",
            "value": 2794,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U2048_Bench.json/main",
            "value": 3351,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U256_Bench.json/main",
            "value": 2890,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U512_Bench.json/main",
            "value": 2944,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U2048_Bench.json/main",
            "value": 13458,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 4696,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 6127,
            "unit": "circuit_size"
          },
          {
            "name": "div_U2048_Bench.json/main",
            "value": 4167,
            "unit": "circuit_size"
          },
          {
            "name": "div_U256_Bench.json/main",
            "value": 2943,
            "unit": "circuit_size"
          },
          {
            "name": "div_U512_Bench.json/main",
            "value": 3077,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U2048_Bench.json/main",
            "value": 3352,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U256_Bench.json/main",
            "value": 2886,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U512_Bench.json/main",
            "value": 2941,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U2048_Bench.json/main",
            "value": 4165,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U256_Bench.json/main",
            "value": 3040,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U512_Bench.json/main",
            "value": 3426,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U2048_Bench.json/main",
            "value": 5248,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U256_Bench.json/main",
            "value": 3120,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U512_Bench.json/main",
            "value": 3588,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U2048_Bench.json/main",
            "value": 3337,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U256_Bench.json/main",
            "value": 2873,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U512_Bench.json/main",
            "value": 2938,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U2048_Bench.json/main",
            "value": 3160,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U256_Bench.json/main",
            "value": 2844,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U512_Bench.json/main",
            "value": 2879,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U2048_Bench.json/main",
            "value": 3337,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U256_Bench.json/main",
            "value": 2873,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U512_Bench.json/main",
            "value": 2938,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U2048_Bench.json/main",
            "value": 2938,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U256_Bench.json/main",
            "value": 2790,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U512_Bench.json/main",
            "value": 2809,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_integer_U2048_Bench.json/main",
            "value": 2885,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_integer_U256_Bench.json/main",
            "value": 2782,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_integer_U512_Bench.json/main",
            "value": 2795,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U2048_Bench.json/main",
            "value": 3835,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U256_Bench.json/main",
            "value": 2987,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U512_Bench.json/main",
            "value": 3336,
            "unit": "circuit_size"
          },
          {
            "name": "neg_U2048_Bench.json/main",
            "value": 3208,
            "unit": "circuit_size"
          },
          {
            "name": "neg_U256_Bench.json/main",
            "value": 2858,
            "unit": "circuit_size"
          },
          {
            "name": "neg_U512_Bench.json/main",
            "value": 2897,
            "unit": "circuit_size"
          },
          {
            "name": "pow_U2048_Bench.json/main",
            "value": 3145,
            "unit": "circuit_size"
          },
          {
            "name": "pow_U256_Bench.json/main",
            "value": 2821,
            "unit": "circuit_size"
          },
          {
            "name": "pow_U512_Bench.json/main",
            "value": 2865,
            "unit": "circuit_size"
          },
          {
            "name": "sub_U2048_Bench.json/main",
            "value": 3325,
            "unit": "circuit_size"
          },
          {
            "name": "sub_U256_Bench.json/main",
            "value": 2879,
            "unit": "circuit_size"
          },
          {
            "name": "sub_U512_Bench.json/main",
            "value": 2931,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U2048_Bench.json/main",
            "value": 3843,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U256_Bench.json/main",
            "value": 2942,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U512_Bench.json/main",
            "value": 3069,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U2048_Bench.json/main",
            "value": 3125,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U256_Bench.json/main",
            "value": 2839,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U512_Bench.json/main",
            "value": 2870,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U2048_Bench.json/main",
            "value": 3843,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U256_Bench.json/main",
            "value": 2942,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U512_Bench.json/main",
            "value": 3069,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U2048_Bench.json/main",
            "value": 4203,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U256_Bench.json/main",
            "value": 2949,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U512_Bench.json/main",
            "value": 3087,
            "unit": "circuit_size"
          },
          {
            "name": "validate_canonical_U2048_Bench.json/main",
            "value": 3155,
            "unit": "circuit_size"
          },
          {
            "name": "validate_canonical_U256_Bench.json/main",
            "value": 2850,
            "unit": "circuit_size"
          },
          {
            "name": "validate_canonical_U512_Bench.json/main",
            "value": 2883,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U2048_Bench.json/main",
            "value": 2979,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U256_Bench.json/main",
            "value": 2817,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U512_Bench.json/main",
            "value": 2832,
            "unit": "circuit_size"
          }
        ]
      }
    ],
    "Brillig Bytecode Size": [
      {
        "commit": {
          "author": {
            "email": "15848336+TomAFrench@users.noreply.github.com",
            "name": "Tom French",
            "username": "TomAFrench"
          },
          "committer": {
            "email": "15848336+TomAFrench@users.noreply.github.com",
            "name": "Tom French",
            "username": "TomAFrench"
          },
          "distinct": true,
          "id": "233ab3746e837894f5166417aed262866f0eace8",
          "message": "feat!: remove U384 and U768\n\nTests which used `U384` as a multi-limb type now use `U512`.\n\nBREAKING CHANGE: the `U384` and `U768` types are removed.",
          "timestamp": "2026-11-04T16:40:17Z",
          "tree_id": "df4c162de3ace27421a35cb207ab416bc973a561",
          "url": "https://github.com/noir-lang/bigint/commit/233ab3746e837894f5166417aed262866f0eace8"
        },
        "date": 1793812173006,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "add_U2048_Bench",
            "value": 310,
            "unit": "opcodes"
          },
          {
            "name": "add_U256_Bench",
            "value": 214,
            "unit": "opcodes"
          },
          {
            "name": "add_U512_Bench",
            "value": 246,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_equal_U2048_Bench",
            "value": 193,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_equal_U256_Bench",
            "value": 103,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_equal_U512_Bench",
            "value": 129,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench",
            "value": 176,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U256_Bench",
            "value": 71,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U512_Bench",
            "value": 85,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_integer_U2048_Bench",
            "value": 153,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_integer_U256_Bench",
            "value": 63,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_integer_U512_Bench",
            "value": 75,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U2048_Bench",
            "value": 586,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U256_Bench",
            "value": 251,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U512_Bench",
            "value": 391,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U2048_Bench",
            "value": 3492,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench",
            "value": 1400,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench",
            "value": 1671,
            "unit": "opcodes"
          },
          {
            "name": "div_U2048_Bench",
            "value": 1801,
            "unit": "opcodes"
          },
          {
            "name": "div_U256_Bench",
            "value": 1737,
            "unit": "opcodes"
          },
          {
            "name": "div_U512_Bench",
            "value": 1948,
            "unit": "opcodes"
          },
          {
            "name": "eq_U2048_Bench",
            "value": 569,
            "unit": "opcodes"
          },
          {
            "name": "eq_U256_Bench",
            "value": 307,
            "unit": "opcodes"
          },
          {
            "name": "eq_U512_Bench",
            "value": 394,
            "unit": "opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U2048_Bench",
            "value": 2793,
            "unit": "opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U256_Bench",
            "value": 1469,
            "unit": "opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U512_Bench",
            "value": 1896,
            "unit": "opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U2048_Bench",
            "value": 3777,
            "unit": "opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U256_Bench",
            "value": 2115,
            "unit": "opcodes"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U512_Bench",
            "value": 2545,
            "unit": "opcodes"
          },
          {
            "name": "from_be_bytes_U2048_Bench",
            "value": 456,
            "unit": "opcodes"
          },
          {
            "name": "from_be_bytes_U256_Bench",
            "value": 305,
            "unit": "opcodes"
          },
          {
            "name": "from_be_bytes_U512_Bench",
            "value": 541,
            "unit": "opcodes"
          },
          {
            "name": "from_field_U2048_Bench",
            "value": 101,
            "unit": "opcodes"
          },
          {
            "name": "from_field_U256_Bench",
            "value": 70,
            "unit": "opcodes"
          },
          {
            "name": "from_field_U512_Bench",
            "value": 75,
            "unit": "opcodes"
          },
          {
            "name": "from_le_bytes_U2048_Bench",
            "value": 497,
            "unit": "opcodes"
          },
          {
            "name": "from_le_bytes_U256_Bench",
            "value": 372,
            "unit": "opcodes"
          },
          {
            "name": "from_le_bytes_U512_Bench",
            "value": 608,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U2048_Bench",
            "value": 188,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U256_Bench",
            "value": 68,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U512_Bench",
            "value": 84,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_integer_U2048_Bench",
            "value": 148,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_integer_U256_Bench",
            "value": 58,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_integer_U512_Bench",
            "value": 70,
            "unit": "opcodes"
          },
          {
            "name": "mul_U2048_Bench",
            "value": 463,
            "unit": "opcodes"
          },
          {
            "name": "mul_U256_Bench",
            "value": 223,
            "unit": "opcodes"
          },
          {
            "name": "mul_U512_Bench",
            "value": 384,
            "unit": "opcodes"
          },
          {
            "name": "neg_U2048_Bench",
            "value": 289,
            "unit": "opcodes"
          },
          {
            "name": "neg_U256_Bench",
            "value": 138,
            "unit": "opcodes"
          },
          {
            "name": "neg_U512_Bench",
            "value": 184,
            "unit": "opcodes"
          },
          {
            "name": "pow_U2048_Bench",
            "value": 883,
            "unit": "opcodes"
          },
          {
            "name": "pow_U256_Bench",
            "value": 395,
            "unit": "opcodes"
          },
          {
            "name": "pow_U512_Bench",
            "value": 696,
            "unit": "opcodes"
          },
          {
            "name": "sub_U2048_Bench",
            "value": 463,
            "unit": "opcodes"
          },
          {
            "name": "sub_U256_Bench",
            "value": 292,
            "unit": "opcodes"
          },
          {
            "name": "sub_U512_Bench",
            "value": 366,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U2048_Bench",
            "value": 201,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U256_Bench",
            "value": 209,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U512_Bench",
            "value": 309,
            "unit": "opcodes"
          },
          {
            "name": "to_field_U2048_Bench",
            "value": 653,
            "unit": "opcodes"
          },
          {
            "name": "to_field_U256_Bench",
            "value": 146,
            "unit": "opcodes"
          },
          {
            "name": "to_field_U512_Bench",
            "value": 213,
            "unit": "opcodes"
          },
          {
            "name": "to_le_bytes_U2048_Bench",
            "value": 241,
            "unit": "opcodes"
          },
          {
            "name": "to_le_bytes_U256_Bench",
            "value": 252,
            "unit": "opcodes"
          },
          {
            "name": "to_le_bytes_U512_Bench",
            "value": 352,
            "unit": "opcodes"
          },
          {
            "name": "udiv_mod_U2048_Bench",
            "value": 1820,
            "unit": "opcodes"
          },
          {
            "name": "udiv_mod_U256_Bench",
            "value": 1756,
            "unit": "opcodes"
          },
          {
            "name": "udiv_mod_U512_Bench",
            "value": 1967,
            "unit": "opcodes"
          },
          {
            "name": "validate_canonical_U2048_Bench",
            "value": 504,
            "unit": "opcodes"
          },
          {
            "name": "validate_canonical_U256_Bench",
            "value": 120,
            "unit": "opcodes"
          },
          {
            "name": "validate_canonical_U512_Bench",
            "value": 174,
            "unit": "opcodes"
          },
          {
            "name": "validate_in_range_U2048_Bench",
            "value": 220,
            "unit": "opcodes"
          },
          {
            "name": "validate_in_range_U256_Bench",
            "value": 70,
            "unit": "opcodes"
          },
          {
            "name": "validate_in_range_U512_Bench",
            "value": 90,
            "unit": "opcodes"
          }
        ]
      }
    ]
  }
}