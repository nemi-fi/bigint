window.BENCHMARK_DATA = {
  "lastUpdate": 1793812165479,
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
      }
    ]
  }
}