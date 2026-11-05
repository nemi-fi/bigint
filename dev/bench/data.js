window.BENCHMARK_DATA = {
  "lastUpdate": 1793845534216,
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
          "id": "36a18b209fb8c9f6ec33d005b7c9a8e6127474ba",
          "message": "chore!: remove `modulus_bits` and `conditional_select` (#5)\n\n`modulus_bits()` only returns the associated constant `MOD_BITS`, which\nis available as `<T as BigInt>::MOD_BITS`. `conditional_select(lhs, rhs,\npredicate)` is equivalent to `if predicate { lhs } else { rhs }`.\n\nBREAKING CHANGE: `BigInt::modulus_bits()` and `conditional_select` are\nremoved.",
          "timestamp": "2026-11-05T01:29:55+08:00",
          "tree_id": "4c66575448200421fe8f1a3b12c29580c44b2ec3",
          "url": "https://github.com/noir-lang/bigint/commit/36a18b209fb8c9f6ec33d005b7c9a8e6127474ba"
        },
        "date": 1793813415416,
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
          "id": "a743139efc1162a2b334e0b140f0097b1d74c6f5",
          "message": "perf: derive `derive_from_seed` values directly from hash bits (#1)\n\nAs the modulus is a power of two, a uniformly random value is just the\nlow `MOD_BITS - 1` bits of a random bitstring. Build each limb directly\nfrom 120 bits of a Poseidon2 output instead of sampling `2 * MOD_BITS`\nbits and reducing them through a chain of constrained `mul`/`add` calls.\n\nHash outputs are split with the canonical `std::field::bn254::decompose`\nand range-checked bit splits instead of a full byte decomposition. Each\nlimb uses the same bits [0, 240) of the hash output as before.\n\nCircuit size above the range-table floor of the `derive_from_seed`\nbenchmark drops by 78% for U256 and 87% for U2048.\n\nThe values produced for a given seed change.",
          "timestamp": "2026-11-05T01:38:41+08:00",
          "tree_id": "a34190551cd016c950c69088c8f13699c38dfc75",
          "url": "https://github.com/noir-lang/bigint/commit/a743139efc1162a2b334e0b140f0097b1d74c6f5"
        },
        "date": 1793813948438,
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
            "value": 323,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 77,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 112,
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
          "id": "f9037a4daa19323caa20da00a8e72a3f5f1096cd",
          "message": "chore!: remove negation (#6)\n\nNegation of an unsigned integer is only meaningful as a wrapping\noperation: under checked semantics `-x` is only valid for `x = 0`. In\npreparation for checked arithmetic, remove the `Neg` impl, the\nconstrained `neg` and the unconstrained `__neg`.\n\n`__sub` computed `lhs + (MOD - rhs)` via `__neg`, so the subtraction of\n`rhs` from the modulus is inlined there.\n\nBREAKING CHANGE: `BigInt` no longer requires or implements `Neg`, and\n`__neg` is removed.",
          "timestamp": "2026-11-05T01:44:46+08:00",
          "tree_id": "7a950da460b32e567b333b56d2d170c3b177d284",
          "url": "https://github.com/noir-lang/bigint/commit/f9037a4daa19323caa20da00a8e72a3f5f1096cd"
        },
        "date": 1793814305376,
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
            "value": 323,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 77,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 112,
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
          "id": "cf7a5e5d3206847408366740b1c4f30ff11621b5",
          "message": "chore(ci): post gates and Brillig diffs as separate comments (#24)\n\nThe Brillig comment step referenced `steps.brillig_diff`, but the step id is `brillig_bytecode_diff`, so its message was always empty and it always deleted the comment. Neither step set a sticky comment `header`, so both used the same comment, and the Brillig step would delete the gates diff. Give each comment its own header and fix the step id.",
          "timestamp": "2026-11-05T09:59:23+08:00",
          "tree_id": "ee00e3d1abdb7731cf2d40f573e05661f6790fd3",
          "url": "https://github.com/noir-lang/bigint/commit/cf7a5e5d3206847408366740b1c4f30ff11621b5"
        },
        "date": 1793843980592,
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
            "value": 323,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 77,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 112,
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
          "id": "912451215ccd3dde9817230a3f2417c8d920f0b1",
          "message": "feat!: use exact-width types with a unique representation per value (#2)\n\n* perf: derive `derive_from_seed` values directly from hash bits\n\nAs the modulus is a power of two, a uniformly random value is just the\nlow `MOD_BITS - 1` bits of a random bitstring. Build each limb directly\nfrom 120 bits of a Poseidon2 output instead of sampling `2 * MOD_BITS`\nbits and reducing them through a chain of constrained `mul`/`add` calls.\n\nHash outputs are split with the canonical `std::field::bn254::decompose`\nand range-checked bit splits instead of a full byte decomposition. Each\nlimb uses the same bits [0, 240) of the hash output as before.\n\nCircuit size above the range-table floor of the `derive_from_seed`\nbenchmark drops by 78% for U256 and 87% for U2048.\n\nThe values produced for a given seed change.\n\n* feat!: use exact-width types with a unique representation per value\n\nReplace the `MOD_BITS` parameter (where values were range-checked to\n`MOD_BITS` bits and the modulus was `2^(MOD_BITS - 1)`) with `BITS`, the\nexact width of the type. Values are range-checked to `BITS` bits, so\nevery range-checked value lies in `[0, 2^BITS)` and has exactly one limb\nrepresentation. This removes the concept of non-canonical values:\n\n- `validate_canonical` is removed, as `validate_in_range` now implies it.\n  `udiv_mod`, `/`, `umod`, `from_field` and the byte conversions no\n  longer need it.\n- `eq` is limb-wise equality instead of a constrained subtraction\n  followed by a zero check.\n- `is_zero` and `assert_is_not_zero` only need to check for the all-zero\n  limb vector, and `assert_is_not_equal` no longer needs to account for\n  values differing by the modulus.\n\nCircuit size above the range-table floor drops by 63-73% for `eq`,\n24-30% for `udiv_mod` and `/`, 6-21% for `add`/`sub`/`neg`, and 34-39%\nfor U2048 `from_field`/`to_field`. Byte decoding for U2048 grows by 10\nACIR opcodes (~1%).\n\nThe quotient bound in `evaluate_quadratic_expression` and the static\nproduct-limb bound are unchanged in absolute terms, as the modulus\nitself is unchanged.\n\nBREAKING CHANGE: `derive_bigint` takes the bit width (e.g.\n`#[derive_bigint(3, 256)]` for `U256`), and `BigInt::MOD_BITS` and\n`modulus_bits()` are renamed to `BITS` and `bits()`. Byte conversions\nuse `(BITS + 7) / 8` bytes (32 for `U256`). `modulus()`,\n`validate_canonical`, `unsafe_is_zero_integer`,\n`unsafe_assert_is_not_zero_integer`, `div_unsafe`, `udiv_mod_unsafe`,\n`umod_unsafe` and the `*_bytes_unsafe` conversions are removed.\n\n* fix: range-check the inputs of `eq` and `cmp`\n\n`eq` and the `Equal` case of `cmp` compare limbs directly, which is only\nsound if both inputs are normalised. Values which bypass the `BigInt`\nconstructors, such as circuit inputs, values returned from unconstrained\nfunctions or `from_limbs_unsafe`, may encode the same integer with\ndifferent limbs, e.g. `[2^120, 0, 0]` and `[0, 1, 0]`. Previously\n`assert(a != b)` accepted these, and `cmp` reported one as greater than\nthe other.\n\nRange-check both inputs first. Range checks are deduplicated per value,\nso this adds no constraints when the inputs are already range-checked,\ne.g. the outputs of other operations.\n\n* feat!: infer the number of limbs in `derive_bigint`\n\n`derive_bigint` takes only the bit width, e.g. `#[derive_bigint(256)]`.\nThe number of limbs is read from the struct's `limbs: [u128; N]` field\nand checked to be `ceil(BITS / 120)`, so the two cannot disagree.\n\nWidths whose top limb would hold 0 or more than 118 bits, i.e. where\n`BITS % 120` is 0 or 119, are rejected with an explicit error, as before.\n\nBREAKING CHANGE: `derive_bigint(N, BITS)` is now `derive_bigint(BITS)`.",
          "timestamp": "2026-11-05T10:01:01+08:00",
          "tree_id": "b166e3a1044495754b7c62f1e84b4095d1faa1d6",
          "url": "https://github.com/noir-lang/bigint/commit/912451215ccd3dde9817230a3f2417c8d920f0b1"
        },
        "date": 1793844083444,
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
            "value": 38,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U256_Bench.json/main",
            "value": 8,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U512_Bench.json/main",
            "value": 12,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench.json/main",
            "value": 20,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U256_Bench.json/main",
            "value": 5,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U512_Bench.json/main",
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
            "value": 323,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 77,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 112,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U2048_Bench.json/main",
            "value": 217,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U256_Bench.json/main",
            "value": 37,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U512_Bench.json/main",
            "value": 61,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U2048_Bench.json/main",
            "value": 125,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U256_Bench.json/main",
            "value": 20,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U512_Bench.json/main",
            "value": 34,
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
            "value": 321,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U256_Bench.json/main",
            "value": 41,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U512_Bench.json/main",
            "value": 79,
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
            "value": 321,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U256_Bench.json/main",
            "value": 41,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U512_Bench.json/main",
            "value": 79,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U2048_Bench.json/main",
            "value": 23,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U256_Bench.json/main",
            "value": 8,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U512_Bench.json/main",
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
            "value": 566,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U256_Bench.json/main",
            "value": 73,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U512_Bench.json/main",
            "value": 143,
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
            "value": 566,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U256_Bench.json/main",
            "value": 73,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U512_Bench.json/main",
            "value": 143,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U2048_Bench.json/main",
            "value": 235,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U256_Bench.json/main",
            "value": 40,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U512_Bench.json/main",
            "value": 66,
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
          "id": "ebad3d486fc284cac91308235eccff1315acda32",
          "message": "chore: move tests into `src/tests.nr` (#14)\n\n`src/tests/` only contained `bigint_test.nr` and a `mod.nr` declaring it, so the tests can live in `src/tests.nr` directly. Test names change from `tests::bigint_test::*` to `tests::*`.",
          "timestamp": "2026-11-05T10:13:35+08:00",
          "tree_id": "23b71cb24840964b1540b49d7210ad2a0cca993e",
          "url": "https://github.com/noir-lang/bigint/commit/ebad3d486fc284cac91308235eccff1315acda32"
        },
        "date": 1793844834228,
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
            "value": 38,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U256_Bench.json/main",
            "value": 8,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U512_Bench.json/main",
            "value": 12,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench.json/main",
            "value": 20,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U256_Bench.json/main",
            "value": 5,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U512_Bench.json/main",
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
            "value": 323,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 77,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 112,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U2048_Bench.json/main",
            "value": 217,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U256_Bench.json/main",
            "value": 37,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U512_Bench.json/main",
            "value": 61,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U2048_Bench.json/main",
            "value": 125,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U256_Bench.json/main",
            "value": 20,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U512_Bench.json/main",
            "value": 34,
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
            "value": 321,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U256_Bench.json/main",
            "value": 41,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U512_Bench.json/main",
            "value": 79,
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
            "value": 321,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U256_Bench.json/main",
            "value": 41,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U512_Bench.json/main",
            "value": 79,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U2048_Bench.json/main",
            "value": 23,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U256_Bench.json/main",
            "value": 8,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U512_Bench.json/main",
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
            "value": 566,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U256_Bench.json/main",
            "value": 73,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U512_Bench.json/main",
            "value": 143,
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
            "value": 566,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U256_Bench.json/main",
            "value": 73,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U512_Bench.json/main",
            "value": 143,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U2048_Bench.json/main",
            "value": 235,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U256_Bench.json/main",
            "value": 40,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U512_Bench.json/main",
            "value": 66,
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
          "id": "ce4e1c3fb384197c25bef2a7337985d05406faa6",
          "message": "chore: tidy up test-only types and the benchmarks module (#15)\n\n* chore: document test-only types and test `derive_from_seed` masking\n\nExplain which code paths `U252` and `U253` exist to cover, and add a direct test that `derive_from_seed` masks the top limb of a width which is not a multiple of 8, and that its constrained and unconstrained implementations agree.\n\n* chore: move benchmarks into `src/benchmarks.nr`\n\n`src/benchmarks/` only contained `bigint_benchmarks.nr` and a `mod.nr` declaring it. The exported benchmark names are unchanged.",
          "timestamp": "2026-11-05T10:16:59+08:00",
          "tree_id": "47c3a0b377257303eb1f512f1f75c8ebb27ec0c2",
          "url": "https://github.com/noir-lang/bigint/commit/ce4e1c3fb384197c25bef2a7337985d05406faa6"
        },
        "date": 1793845037806,
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
            "value": 38,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U256_Bench.json/main",
            "value": 8,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U512_Bench.json/main",
            "value": 12,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench.json/main",
            "value": 20,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U256_Bench.json/main",
            "value": 5,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U512_Bench.json/main",
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
            "value": 323,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 77,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 112,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U2048_Bench.json/main",
            "value": 217,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U256_Bench.json/main",
            "value": 37,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U512_Bench.json/main",
            "value": 61,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U2048_Bench.json/main",
            "value": 125,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U256_Bench.json/main",
            "value": 20,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U512_Bench.json/main",
            "value": 34,
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
            "value": 321,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U256_Bench.json/main",
            "value": 41,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U512_Bench.json/main",
            "value": 79,
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
            "value": 321,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U256_Bench.json/main",
            "value": 41,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U512_Bench.json/main",
            "value": 79,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U2048_Bench.json/main",
            "value": 23,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U256_Bench.json/main",
            "value": 8,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U512_Bench.json/main",
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
            "value": 566,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U256_Bench.json/main",
            "value": 73,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U512_Bench.json/main",
            "value": 143,
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
            "value": 566,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U256_Bench.json/main",
            "value": 73,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U512_Bench.json/main",
            "value": 143,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U2048_Bench.json/main",
            "value": 235,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U256_Bench.json/main",
            "value": 40,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U512_Bench.json/main",
            "value": 66,
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
          "id": "b55cbd253ee9879a7a9b9279b5ffde8d365fa790",
          "message": "chore: move test-only `TWO_POW_60` into the `msb` tests (#12)\n\n`TWO_POW_60` is only used by the reference 64-bit implementation in the tests of `utils/msb.nr`.",
          "timestamp": "2026-11-05T10:18:30+08:00",
          "tree_id": "4e6696cdc3d2bd5deeef32734630228967562c56",
          "url": "https://github.com/noir-lang/bigint/commit/b55cbd253ee9879a7a9b9279b5ffde8d365fa790"
        },
        "date": 1793845130260,
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
            "value": 38,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U256_Bench.json/main",
            "value": 8,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U512_Bench.json/main",
            "value": 12,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench.json/main",
            "value": 20,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U256_Bench.json/main",
            "value": 5,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U512_Bench.json/main",
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
            "value": 323,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 77,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 112,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U2048_Bench.json/main",
            "value": 217,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U256_Bench.json/main",
            "value": 37,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U512_Bench.json/main",
            "value": 61,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U2048_Bench.json/main",
            "value": 125,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U256_Bench.json/main",
            "value": 20,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U512_Bench.json/main",
            "value": 34,
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
            "value": 321,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U256_Bench.json/main",
            "value": 41,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U512_Bench.json/main",
            "value": 79,
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
            "value": 321,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U256_Bench.json/main",
            "value": 41,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U512_Bench.json/main",
            "value": 79,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U2048_Bench.json/main",
            "value": 23,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U256_Bench.json/main",
            "value": 8,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U512_Bench.json/main",
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
            "value": 566,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U256_Bench.json/main",
            "value": 73,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U512_Bench.json/main",
            "value": 143,
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
            "value": 566,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U256_Bench.json/main",
            "value": 73,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U512_Bench.json/main",
            "value": 143,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U2048_Bench.json/main",
            "value": 235,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U256_Bench.json/main",
            "value": 40,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U512_Bench.json/main",
            "value": 66,
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
          "id": "ed59d2cbcde81512018e4187f7910524d1b25dbb",
          "message": "fix: fail on division by zero in `__udiv_mod` (#10)\n\n`__udiv_mod` (and so `__div`) returned an arbitrary result for a zero\ndivisor, e.g. `__udiv_mod(7, 0) = (15, 7)`. The constrained `udiv_mod`\nalready rejects a zero divisor, as `remainder < divisor` cannot hold, but\nonly with a generic constraint failure.\n\nAssert that the divisor is non-zero, with the same message as Noir's\nnative integers, so that both the constrained and unconstrained\noperations fail with `attempt to divide by zero`.",
          "timestamp": "2026-11-05T10:25:10+08:00",
          "tree_id": "b36c7f314b2d95b069b685c4341f2f81bbf4340a",
          "url": "https://github.com/noir-lang/bigint/commit/ed59d2cbcde81512018e4187f7910524d1b25dbb"
        },
        "date": 1793845532889,
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
            "value": 38,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U256_Bench.json/main",
            "value": 8,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_equal_U512_Bench.json/main",
            "value": 12,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench.json/main",
            "value": 20,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U256_Bench.json/main",
            "value": 5,
            "unit": "acir_opcodes"
          },
          {
            "name": "assert_is_not_zero_U512_Bench.json/main",
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
            "value": 323,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 77,
            "unit": "acir_opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 112,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U2048_Bench.json/main",
            "value": 217,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U256_Bench.json/main",
            "value": 37,
            "unit": "acir_opcodes"
          },
          {
            "name": "div_U512_Bench.json/main",
            "value": 61,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U2048_Bench.json/main",
            "value": 125,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U256_Bench.json/main",
            "value": 20,
            "unit": "acir_opcodes"
          },
          {
            "name": "eq_U512_Bench.json/main",
            "value": 34,
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
            "value": 321,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U256_Bench.json/main",
            "value": 41,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_be_bytes_U512_Bench.json/main",
            "value": 79,
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
            "value": 321,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U256_Bench.json/main",
            "value": 41,
            "unit": "acir_opcodes"
          },
          {
            "name": "from_le_bytes_U512_Bench.json/main",
            "value": 79,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U2048_Bench.json/main",
            "value": 23,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U256_Bench.json/main",
            "value": 8,
            "unit": "acir_opcodes"
          },
          {
            "name": "is_zero_U512_Bench.json/main",
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
            "value": 566,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U256_Bench.json/main",
            "value": 73,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_be_bytes_U512_Bench.json/main",
            "value": 143,
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
            "value": 566,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U256_Bench.json/main",
            "value": 73,
            "unit": "acir_opcodes"
          },
          {
            "name": "to_le_bytes_U512_Bench.json/main",
            "value": 143,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U2048_Bench.json/main",
            "value": 235,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U256_Bench.json/main",
            "value": 40,
            "unit": "acir_opcodes"
          },
          {
            "name": "udiv_mod_U512_Bench.json/main",
            "value": 66,
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
          "id": "36a18b209fb8c9f6ec33d005b7c9a8e6127474ba",
          "message": "chore!: remove `modulus_bits` and `conditional_select` (#5)\n\n`modulus_bits()` only returns the associated constant `MOD_BITS`, which\nis available as `<T as BigInt>::MOD_BITS`. `conditional_select(lhs, rhs,\npredicate)` is equivalent to `if predicate { lhs } else { rhs }`.\n\nBREAKING CHANGE: `BigInt::modulus_bits()` and `conditional_select` are\nremoved.",
          "timestamp": "2026-11-05T01:29:55+08:00",
          "tree_id": "4c66575448200421fe8f1a3b12c29580c44b2ec3",
          "url": "https://github.com/noir-lang/bigint/commit/36a18b209fb8c9f6ec33d005b7c9a8e6127474ba"
        },
        "date": 1793813418335,
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
          "id": "a743139efc1162a2b334e0b140f0097b1d74c6f5",
          "message": "perf: derive `derive_from_seed` values directly from hash bits (#1)\n\nAs the modulus is a power of two, a uniformly random value is just the\nlow `MOD_BITS - 1` bits of a random bitstring. Build each limb directly\nfrom 120 bits of a Poseidon2 output instead of sampling `2 * MOD_BITS`\nbits and reducing them through a chain of constrained `mul`/`add` calls.\n\nHash outputs are split with the canonical `std::field::bn254::decompose`\nand range-checked bit splits instead of a full byte decomposition. Each\nlimb uses the same bits [0, 240) of the hash output as before.\n\nCircuit size above the range-table floor of the `derive_from_seed`\nbenchmark drops by 78% for U256 and 87% for U2048.\n\nThe values produced for a given seed change.",
          "timestamp": "2026-11-05T01:38:41+08:00",
          "tree_id": "a34190551cd016c950c69088c8f13699c38dfc75",
          "url": "https://github.com/noir-lang/bigint/commit/a743139efc1162a2b334e0b140f0097b1d74c6f5"
        },
        "date": 1793813951241,
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
            "value": 4280,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 3201,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 3349,
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
          "id": "f9037a4daa19323caa20da00a8e72a3f5f1096cd",
          "message": "chore!: remove negation (#6)\n\nNegation of an unsigned integer is only meaningful as a wrapping\noperation: under checked semantics `-x` is only valid for `x = 0`. In\npreparation for checked arithmetic, remove the `Neg` impl, the\nconstrained `neg` and the unconstrained `__neg`.\n\n`__sub` computed `lhs + (MOD - rhs)` via `__neg`, so the subtraction of\n`rhs` from the modulus is inlined there.\n\nBREAKING CHANGE: `BigInt` no longer requires or implements `Neg`, and\n`__neg` is removed.",
          "timestamp": "2026-11-05T01:44:46+08:00",
          "tree_id": "7a950da460b32e567b333b56d2d170c3b177d284",
          "url": "https://github.com/noir-lang/bigint/commit/f9037a4daa19323caa20da00a8e72a3f5f1096cd"
        },
        "date": 1793814309111,
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
            "value": 4280,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 3201,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 3349,
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
          "id": "cf7a5e5d3206847408366740b1c4f30ff11621b5",
          "message": "chore(ci): post gates and Brillig diffs as separate comments (#24)\n\nThe Brillig comment step referenced `steps.brillig_diff`, but the step id is `brillig_bytecode_diff`, so its message was always empty and it always deleted the comment. Neither step set a sticky comment `header`, so both used the same comment, and the Brillig step would delete the gates diff. Give each comment its own header and fix the step id.",
          "timestamp": "2026-11-05T09:59:23+08:00",
          "tree_id": "ee00e3d1abdb7731cf2d40f573e05661f6790fd3",
          "url": "https://github.com/noir-lang/bigint/commit/cf7a5e5d3206847408366740b1c4f30ff11621b5"
        },
        "date": 1793843982407,
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
            "value": 4280,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 3201,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 3349,
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
          "id": "912451215ccd3dde9817230a3f2417c8d920f0b1",
          "message": "feat!: use exact-width types with a unique representation per value (#2)\n\n* perf: derive `derive_from_seed` values directly from hash bits\n\nAs the modulus is a power of two, a uniformly random value is just the\nlow `MOD_BITS - 1` bits of a random bitstring. Build each limb directly\nfrom 120 bits of a Poseidon2 output instead of sampling `2 * MOD_BITS`\nbits and reducing them through a chain of constrained `mul`/`add` calls.\n\nHash outputs are split with the canonical `std::field::bn254::decompose`\nand range-checked bit splits instead of a full byte decomposition. Each\nlimb uses the same bits [0, 240) of the hash output as before.\n\nCircuit size above the range-table floor of the `derive_from_seed`\nbenchmark drops by 78% for U256 and 87% for U2048.\n\nThe values produced for a given seed change.\n\n* feat!: use exact-width types with a unique representation per value\n\nReplace the `MOD_BITS` parameter (where values were range-checked to\n`MOD_BITS` bits and the modulus was `2^(MOD_BITS - 1)`) with `BITS`, the\nexact width of the type. Values are range-checked to `BITS` bits, so\nevery range-checked value lies in `[0, 2^BITS)` and has exactly one limb\nrepresentation. This removes the concept of non-canonical values:\n\n- `validate_canonical` is removed, as `validate_in_range` now implies it.\n  `udiv_mod`, `/`, `umod`, `from_field` and the byte conversions no\n  longer need it.\n- `eq` is limb-wise equality instead of a constrained subtraction\n  followed by a zero check.\n- `is_zero` and `assert_is_not_zero` only need to check for the all-zero\n  limb vector, and `assert_is_not_equal` no longer needs to account for\n  values differing by the modulus.\n\nCircuit size above the range-table floor drops by 63-73% for `eq`,\n24-30% for `udiv_mod` and `/`, 6-21% for `add`/`sub`/`neg`, and 34-39%\nfor U2048 `from_field`/`to_field`. Byte decoding for U2048 grows by 10\nACIR opcodes (~1%).\n\nThe quotient bound in `evaluate_quadratic_expression` and the static\nproduct-limb bound are unchanged in absolute terms, as the modulus\nitself is unchanged.\n\nBREAKING CHANGE: `derive_bigint` takes the bit width (e.g.\n`#[derive_bigint(3, 256)]` for `U256`), and `BigInt::MOD_BITS` and\n`modulus_bits()` are renamed to `BITS` and `bits()`. Byte conversions\nuse `(BITS + 7) / 8` bytes (32 for `U256`). `modulus()`,\n`validate_canonical`, `unsafe_is_zero_integer`,\n`unsafe_assert_is_not_zero_integer`, `div_unsafe`, `udiv_mod_unsafe`,\n`umod_unsafe` and the `*_bytes_unsafe` conversions are removed.\n\n* fix: range-check the inputs of `eq` and `cmp`\n\n`eq` and the `Equal` case of `cmp` compare limbs directly, which is only\nsound if both inputs are normalised. Values which bypass the `BigInt`\nconstructors, such as circuit inputs, values returned from unconstrained\nfunctions or `from_limbs_unsafe`, may encode the same integer with\ndifferent limbs, e.g. `[2^120, 0, 0]` and `[0, 1, 0]`. Previously\n`assert(a != b)` accepted these, and `cmp` reported one as greater than\nthe other.\n\nRange-check both inputs first. Range checks are deduplicated per value,\nso this adds no constraints when the inputs are already range-checked,\ne.g. the outputs of other operations.\n\n* feat!: infer the number of limbs in `derive_bigint`\n\n`derive_bigint` takes only the bit width, e.g. `#[derive_bigint(256)]`.\nThe number of limbs is read from the struct's `limbs: [u128; N]` field\nand checked to be `ceil(BITS / 120)`, so the two cannot disagree.\n\nWidths whose top limb would hold 0 or more than 118 bits, i.e. where\n`BITS % 120` is 0 or 119, are rejected with an explicit error, as before.\n\nBREAKING CHANGE: `derive_bigint(N, BITS)` is now `derive_bigint(BITS)`.",
          "timestamp": "2026-11-05T10:01:01+08:00",
          "tree_id": "b166e3a1044495754b7c62f1e84b4095d1faa1d6",
          "url": "https://github.com/noir-lang/bigint/commit/912451215ccd3dde9817230a3f2417c8d920f0b1"
        },
        "date": 1793844086683,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "add_U2048_Bench.json/main",
            "value": 3236,
            "unit": "circuit_size"
          },
          {
            "name": "add_U256_Bench.json/main",
            "value": 2873,
            "unit": "circuit_size"
          },
          {
            "name": "add_U512_Bench.json/main",
            "value": 2928,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U2048_Bench.json/main",
            "value": 3027,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U256_Bench.json/main",
            "value": 2803,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U512_Bench.json/main",
            "value": 2833,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench.json/main",
            "value": 2893,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U256_Bench.json/main",
            "value": 2780,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U512_Bench.json/main",
            "value": 2794,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U2048_Bench.json/main",
            "value": 3204,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U256_Bench.json/main",
            "value": 2869,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U512_Bench.json/main",
            "value": 2917,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U2048_Bench.json/main",
            "value": 4280,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 3201,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 3349,
            "unit": "circuit_size"
          },
          {
            "name": "div_U2048_Bench.json/main",
            "value": 3791,
            "unit": "circuit_size"
          },
          {
            "name": "div_U256_Bench.json/main",
            "value": 2903,
            "unit": "circuit_size"
          },
          {
            "name": "div_U512_Bench.json/main",
            "value": 3001,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U2048_Bench.json/main",
            "value": 3052,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U256_Bench.json/main",
            "value": 2841,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U512_Bench.json/main",
            "value": 2872,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U2048_Bench.json/main",
            "value": 4075,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U256_Bench.json/main",
            "value": 3039,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U512_Bench.json/main",
            "value": 3423,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U2048_Bench.json/main",
            "value": 5158,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U256_Bench.json/main",
            "value": 3119,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U512_Bench.json/main",
            "value": 3585,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U2048_Bench.json/main",
            "value": 3369,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U256_Bench.json/main",
            "value": 2872,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U512_Bench.json/main",
            "value": 2937,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U2048_Bench.json/main",
            "value": 3070,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U256_Bench.json/main",
            "value": 2844,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U512_Bench.json/main",
            "value": 2877,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U2048_Bench.json/main",
            "value": 3369,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U256_Bench.json/main",
            "value": 2872,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U512_Bench.json/main",
            "value": 2937,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U2048_Bench.json/main",
            "value": 2885,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U256_Bench.json/main",
            "value": 2782,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U512_Bench.json/main",
            "value": 2795,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U2048_Bench.json/main",
            "value": 3746,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U256_Bench.json/main",
            "value": 2987,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U512_Bench.json/main",
            "value": 3334,
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
            "value": 3236,
            "unit": "circuit_size"
          },
          {
            "name": "sub_U256_Bench.json/main",
            "value": 2873,
            "unit": "circuit_size"
          },
          {
            "name": "sub_U512_Bench.json/main",
            "value": 2928,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U2048_Bench.json/main",
            "value": 3840,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U256_Bench.json/main",
            "value": 2939,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U512_Bench.json/main",
            "value": 3066,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U2048_Bench.json/main",
            "value": 3035,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U256_Bench.json/main",
            "value": 2839,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U512_Bench.json/main",
            "value": 2868,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U2048_Bench.json/main",
            "value": 3840,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U256_Bench.json/main",
            "value": 2939,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U512_Bench.json/main",
            "value": 3066,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U2048_Bench.json/main",
            "value": 3827,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U256_Bench.json/main",
            "value": 2909,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U512_Bench.json/main",
            "value": 3011,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U2048_Bench.json/main",
            "value": 2890,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U256_Bench.json/main",
            "value": 2817,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U512_Bench.json/main",
            "value": 2829,
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
          "id": "ebad3d486fc284cac91308235eccff1315acda32",
          "message": "chore: move tests into `src/tests.nr` (#14)\n\n`src/tests/` only contained `bigint_test.nr` and a `mod.nr` declaring it, so the tests can live in `src/tests.nr` directly. Test names change from `tests::bigint_test::*` to `tests::*`.",
          "timestamp": "2026-11-05T10:13:35+08:00",
          "tree_id": "23b71cb24840964b1540b49d7210ad2a0cca993e",
          "url": "https://github.com/noir-lang/bigint/commit/ebad3d486fc284cac91308235eccff1315acda32"
        },
        "date": 1793844836269,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "add_U2048_Bench.json/main",
            "value": 3236,
            "unit": "circuit_size"
          },
          {
            "name": "add_U256_Bench.json/main",
            "value": 2873,
            "unit": "circuit_size"
          },
          {
            "name": "add_U512_Bench.json/main",
            "value": 2928,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U2048_Bench.json/main",
            "value": 3027,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U256_Bench.json/main",
            "value": 2803,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U512_Bench.json/main",
            "value": 2833,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench.json/main",
            "value": 2893,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U256_Bench.json/main",
            "value": 2780,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U512_Bench.json/main",
            "value": 2794,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U2048_Bench.json/main",
            "value": 3204,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U256_Bench.json/main",
            "value": 2869,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U512_Bench.json/main",
            "value": 2917,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U2048_Bench.json/main",
            "value": 4280,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 3201,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 3349,
            "unit": "circuit_size"
          },
          {
            "name": "div_U2048_Bench.json/main",
            "value": 3791,
            "unit": "circuit_size"
          },
          {
            "name": "div_U256_Bench.json/main",
            "value": 2903,
            "unit": "circuit_size"
          },
          {
            "name": "div_U512_Bench.json/main",
            "value": 3001,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U2048_Bench.json/main",
            "value": 3052,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U256_Bench.json/main",
            "value": 2841,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U512_Bench.json/main",
            "value": 2872,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U2048_Bench.json/main",
            "value": 4075,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U256_Bench.json/main",
            "value": 3039,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U512_Bench.json/main",
            "value": 3423,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U2048_Bench.json/main",
            "value": 5158,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U256_Bench.json/main",
            "value": 3119,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U512_Bench.json/main",
            "value": 3585,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U2048_Bench.json/main",
            "value": 3369,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U256_Bench.json/main",
            "value": 2872,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U512_Bench.json/main",
            "value": 2937,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U2048_Bench.json/main",
            "value": 3070,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U256_Bench.json/main",
            "value": 2844,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U512_Bench.json/main",
            "value": 2877,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U2048_Bench.json/main",
            "value": 3369,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U256_Bench.json/main",
            "value": 2872,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U512_Bench.json/main",
            "value": 2937,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U2048_Bench.json/main",
            "value": 2885,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U256_Bench.json/main",
            "value": 2782,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U512_Bench.json/main",
            "value": 2795,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U2048_Bench.json/main",
            "value": 3746,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U256_Bench.json/main",
            "value": 2987,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U512_Bench.json/main",
            "value": 3334,
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
            "value": 3236,
            "unit": "circuit_size"
          },
          {
            "name": "sub_U256_Bench.json/main",
            "value": 2873,
            "unit": "circuit_size"
          },
          {
            "name": "sub_U512_Bench.json/main",
            "value": 2928,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U2048_Bench.json/main",
            "value": 3840,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U256_Bench.json/main",
            "value": 2939,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U512_Bench.json/main",
            "value": 3066,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U2048_Bench.json/main",
            "value": 3035,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U256_Bench.json/main",
            "value": 2839,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U512_Bench.json/main",
            "value": 2868,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U2048_Bench.json/main",
            "value": 3840,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U256_Bench.json/main",
            "value": 2939,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U512_Bench.json/main",
            "value": 3066,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U2048_Bench.json/main",
            "value": 3827,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U256_Bench.json/main",
            "value": 2909,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U512_Bench.json/main",
            "value": 3011,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U2048_Bench.json/main",
            "value": 2890,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U256_Bench.json/main",
            "value": 2817,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U512_Bench.json/main",
            "value": 2829,
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
          "id": "ce4e1c3fb384197c25bef2a7337985d05406faa6",
          "message": "chore: tidy up test-only types and the benchmarks module (#15)\n\n* chore: document test-only types and test `derive_from_seed` masking\n\nExplain which code paths `U252` and `U253` exist to cover, and add a direct test that `derive_from_seed` masks the top limb of a width which is not a multiple of 8, and that its constrained and unconstrained implementations agree.\n\n* chore: move benchmarks into `src/benchmarks.nr`\n\n`src/benchmarks/` only contained `bigint_benchmarks.nr` and a `mod.nr` declaring it. The exported benchmark names are unchanged.",
          "timestamp": "2026-11-05T10:16:59+08:00",
          "tree_id": "47c3a0b377257303eb1f512f1f75c8ebb27ec0c2",
          "url": "https://github.com/noir-lang/bigint/commit/ce4e1c3fb384197c25bef2a7337985d05406faa6"
        },
        "date": 1793845040142,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "add_U2048_Bench.json/main",
            "value": 3236,
            "unit": "circuit_size"
          },
          {
            "name": "add_U256_Bench.json/main",
            "value": 2873,
            "unit": "circuit_size"
          },
          {
            "name": "add_U512_Bench.json/main",
            "value": 2928,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U2048_Bench.json/main",
            "value": 3027,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U256_Bench.json/main",
            "value": 2803,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U512_Bench.json/main",
            "value": 2833,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench.json/main",
            "value": 2893,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U256_Bench.json/main",
            "value": 2780,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U512_Bench.json/main",
            "value": 2794,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U2048_Bench.json/main",
            "value": 3204,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U256_Bench.json/main",
            "value": 2869,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U512_Bench.json/main",
            "value": 2917,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U2048_Bench.json/main",
            "value": 4280,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 3201,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 3349,
            "unit": "circuit_size"
          },
          {
            "name": "div_U2048_Bench.json/main",
            "value": 3791,
            "unit": "circuit_size"
          },
          {
            "name": "div_U256_Bench.json/main",
            "value": 2903,
            "unit": "circuit_size"
          },
          {
            "name": "div_U512_Bench.json/main",
            "value": 3001,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U2048_Bench.json/main",
            "value": 3052,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U256_Bench.json/main",
            "value": 2841,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U512_Bench.json/main",
            "value": 2872,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U2048_Bench.json/main",
            "value": 4075,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U256_Bench.json/main",
            "value": 3039,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U512_Bench.json/main",
            "value": 3423,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U2048_Bench.json/main",
            "value": 5158,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U256_Bench.json/main",
            "value": 3119,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U512_Bench.json/main",
            "value": 3585,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U2048_Bench.json/main",
            "value": 3369,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U256_Bench.json/main",
            "value": 2872,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U512_Bench.json/main",
            "value": 2937,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U2048_Bench.json/main",
            "value": 3070,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U256_Bench.json/main",
            "value": 2844,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U512_Bench.json/main",
            "value": 2877,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U2048_Bench.json/main",
            "value": 3369,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U256_Bench.json/main",
            "value": 2872,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U512_Bench.json/main",
            "value": 2937,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U2048_Bench.json/main",
            "value": 2885,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U256_Bench.json/main",
            "value": 2782,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U512_Bench.json/main",
            "value": 2795,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U2048_Bench.json/main",
            "value": 3746,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U256_Bench.json/main",
            "value": 2987,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U512_Bench.json/main",
            "value": 3334,
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
            "value": 3236,
            "unit": "circuit_size"
          },
          {
            "name": "sub_U256_Bench.json/main",
            "value": 2873,
            "unit": "circuit_size"
          },
          {
            "name": "sub_U512_Bench.json/main",
            "value": 2928,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U2048_Bench.json/main",
            "value": 3840,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U256_Bench.json/main",
            "value": 2939,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U512_Bench.json/main",
            "value": 3066,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U2048_Bench.json/main",
            "value": 3035,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U256_Bench.json/main",
            "value": 2839,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U512_Bench.json/main",
            "value": 2868,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U2048_Bench.json/main",
            "value": 3840,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U256_Bench.json/main",
            "value": 2939,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U512_Bench.json/main",
            "value": 3066,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U2048_Bench.json/main",
            "value": 3827,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U256_Bench.json/main",
            "value": 2909,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U512_Bench.json/main",
            "value": 3011,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U2048_Bench.json/main",
            "value": 2890,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U256_Bench.json/main",
            "value": 2817,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U512_Bench.json/main",
            "value": 2829,
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
          "id": "b55cbd253ee9879a7a9b9279b5ffde8d365fa790",
          "message": "chore: move test-only `TWO_POW_60` into the `msb` tests (#12)\n\n`TWO_POW_60` is only used by the reference 64-bit implementation in the tests of `utils/msb.nr`.",
          "timestamp": "2026-11-05T10:18:30+08:00",
          "tree_id": "4e6696cdc3d2bd5deeef32734630228967562c56",
          "url": "https://github.com/noir-lang/bigint/commit/b55cbd253ee9879a7a9b9279b5ffde8d365fa790"
        },
        "date": 1793845132833,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "add_U2048_Bench.json/main",
            "value": 3236,
            "unit": "circuit_size"
          },
          {
            "name": "add_U256_Bench.json/main",
            "value": 2873,
            "unit": "circuit_size"
          },
          {
            "name": "add_U512_Bench.json/main",
            "value": 2928,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U2048_Bench.json/main",
            "value": 3027,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U256_Bench.json/main",
            "value": 2803,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_equal_U512_Bench.json/main",
            "value": 2833,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench.json/main",
            "value": 2893,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U256_Bench.json/main",
            "value": 2780,
            "unit": "circuit_size"
          },
          {
            "name": "assert_is_not_zero_U512_Bench.json/main",
            "value": 2794,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U2048_Bench.json/main",
            "value": 3204,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U256_Bench.json/main",
            "value": 2869,
            "unit": "circuit_size"
          },
          {
            "name": "cmp_U512_Bench.json/main",
            "value": 2917,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U2048_Bench.json/main",
            "value": 4280,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench.json/main",
            "value": 3201,
            "unit": "circuit_size"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench.json/main",
            "value": 3349,
            "unit": "circuit_size"
          },
          {
            "name": "div_U2048_Bench.json/main",
            "value": 3791,
            "unit": "circuit_size"
          },
          {
            "name": "div_U256_Bench.json/main",
            "value": 2903,
            "unit": "circuit_size"
          },
          {
            "name": "div_U512_Bench.json/main",
            "value": 3001,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U2048_Bench.json/main",
            "value": 3052,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U256_Bench.json/main",
            "value": 2841,
            "unit": "circuit_size"
          },
          {
            "name": "eq_U512_Bench.json/main",
            "value": 2872,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U2048_Bench.json/main",
            "value": 4075,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U256_Bench.json/main",
            "value": 3039,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_1_element_U512_Bench.json/main",
            "value": 3423,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U2048_Bench.json/main",
            "value": 5158,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U256_Bench.json/main",
            "value": 3119,
            "unit": "circuit_size"
          },
          {
            "name": "evaluate_quadratic_expression_3_elements_U512_Bench.json/main",
            "value": 3585,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U2048_Bench.json/main",
            "value": 3369,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U256_Bench.json/main",
            "value": 2872,
            "unit": "circuit_size"
          },
          {
            "name": "from_be_bytes_U512_Bench.json/main",
            "value": 2937,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U2048_Bench.json/main",
            "value": 3070,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U256_Bench.json/main",
            "value": 2844,
            "unit": "circuit_size"
          },
          {
            "name": "from_field_U512_Bench.json/main",
            "value": 2877,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U2048_Bench.json/main",
            "value": 3369,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U256_Bench.json/main",
            "value": 2872,
            "unit": "circuit_size"
          },
          {
            "name": "from_le_bytes_U512_Bench.json/main",
            "value": 2937,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U2048_Bench.json/main",
            "value": 2885,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U256_Bench.json/main",
            "value": 2782,
            "unit": "circuit_size"
          },
          {
            "name": "is_zero_U512_Bench.json/main",
            "value": 2795,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U2048_Bench.json/main",
            "value": 3746,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U256_Bench.json/main",
            "value": 2987,
            "unit": "circuit_size"
          },
          {
            "name": "mul_U512_Bench.json/main",
            "value": 3334,
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
            "value": 3236,
            "unit": "circuit_size"
          },
          {
            "name": "sub_U256_Bench.json/main",
            "value": 2873,
            "unit": "circuit_size"
          },
          {
            "name": "sub_U512_Bench.json/main",
            "value": 2928,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U2048_Bench.json/main",
            "value": 3840,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U256_Bench.json/main",
            "value": 2939,
            "unit": "circuit_size"
          },
          {
            "name": "to_be_bytes_U512_Bench.json/main",
            "value": 3066,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U2048_Bench.json/main",
            "value": 3035,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U256_Bench.json/main",
            "value": 2839,
            "unit": "circuit_size"
          },
          {
            "name": "to_field_U512_Bench.json/main",
            "value": 2868,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U2048_Bench.json/main",
            "value": 3840,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U256_Bench.json/main",
            "value": 2939,
            "unit": "circuit_size"
          },
          {
            "name": "to_le_bytes_U512_Bench.json/main",
            "value": 3066,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U2048_Bench.json/main",
            "value": 3827,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U256_Bench.json/main",
            "value": 2909,
            "unit": "circuit_size"
          },
          {
            "name": "udiv_mod_U512_Bench.json/main",
            "value": 3011,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U2048_Bench.json/main",
            "value": 2890,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U256_Bench.json/main",
            "value": 2817,
            "unit": "circuit_size"
          },
          {
            "name": "validate_in_range_U512_Bench.json/main",
            "value": 2829,
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
        "date": 1793812264455,
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
          "id": "36a18b209fb8c9f6ec33d005b7c9a8e6127474ba",
          "message": "chore!: remove `modulus_bits` and `conditional_select` (#5)\n\n`modulus_bits()` only returns the associated constant `MOD_BITS`, which\nis available as `<T as BigInt>::MOD_BITS`. `conditional_select(lhs, rhs,\npredicate)` is equivalent to `if predicate { lhs } else { rhs }`.\n\nBREAKING CHANGE: `BigInt::modulus_bits()` and `conditional_select` are\nremoved.",
          "timestamp": "2026-11-05T01:29:55+08:00",
          "tree_id": "4c66575448200421fe8f1a3b12c29580c44b2ec3",
          "url": "https://github.com/noir-lang/bigint/commit/36a18b209fb8c9f6ec33d005b7c9a8e6127474ba"
        },
        "date": 1793813424325,
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
          "id": "a743139efc1162a2b334e0b140f0097b1d74c6f5",
          "message": "perf: derive `derive_from_seed` values directly from hash bits (#1)\n\nAs the modulus is a power of two, a uniformly random value is just the\nlow `MOD_BITS - 1` bits of a random bitstring. Build each limb directly\nfrom 120 bits of a Poseidon2 output instead of sampling `2 * MOD_BITS`\nbits and reducing them through a chain of constrained `mul`/`add` calls.\n\nHash outputs are split with the canonical `std::field::bn254::decompose`\nand range-checked bit splits instead of a full byte decomposition. Each\nlimb uses the same bits [0, 240) of the hash output as before.\n\nCircuit size above the range-table floor of the `derive_from_seed`\nbenchmark drops by 78% for U256 and 87% for U2048.\n\nThe values produced for a given seed change.",
          "timestamp": "2026-11-05T01:38:41+08:00",
          "tree_id": "a34190551cd016c950c69088c8f13699c38dfc75",
          "url": "https://github.com/noir-lang/bigint/commit/a743139efc1162a2b334e0b140f0097b1d74c6f5"
        },
        "date": 1793813955969,
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
            "value": 541,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench",
            "value": 383,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench",
            "value": 413,
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
          "id": "f9037a4daa19323caa20da00a8e72a3f5f1096cd",
          "message": "chore!: remove negation (#6)\n\nNegation of an unsigned integer is only meaningful as a wrapping\noperation: under checked semantics `-x` is only valid for `x = 0`. In\npreparation for checked arithmetic, remove the `Neg` impl, the\nconstrained `neg` and the unconstrained `__neg`.\n\n`__sub` computed `lhs + (MOD - rhs)` via `__neg`, so the subtraction of\n`rhs` from the modulus is inlined there.\n\nBREAKING CHANGE: `BigInt` no longer requires or implements `Neg`, and\n`__neg` is removed.",
          "timestamp": "2026-11-05T01:44:46+08:00",
          "tree_id": "7a950da460b32e567b333b56d2d170c3b177d284",
          "url": "https://github.com/noir-lang/bigint/commit/f9037a4daa19323caa20da00a8e72a3f5f1096cd"
        },
        "date": 1793814313242,
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
            "value": 541,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench",
            "value": 383,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench",
            "value": 413,
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
            "value": 291,
            "unit": "opcodes"
          },
          {
            "name": "eq_U512_Bench",
            "value": 395,
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
            "value": 464,
            "unit": "opcodes"
          },
          {
            "name": "sub_U256_Bench",
            "value": 276,
            "unit": "opcodes"
          },
          {
            "name": "sub_U512_Bench",
            "value": 368,
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
          "id": "cf7a5e5d3206847408366740b1c4f30ff11621b5",
          "message": "chore(ci): post gates and Brillig diffs as separate comments (#24)\n\nThe Brillig comment step referenced `steps.brillig_diff`, but the step id is `brillig_bytecode_diff`, so its message was always empty and it always deleted the comment. Neither step set a sticky comment `header`, so both used the same comment, and the Brillig step would delete the gates diff. Give each comment its own header and fix the step id.",
          "timestamp": "2026-11-05T09:59:23+08:00",
          "tree_id": "ee00e3d1abdb7731cf2d40f573e05661f6790fd3",
          "url": "https://github.com/noir-lang/bigint/commit/cf7a5e5d3206847408366740b1c4f30ff11621b5"
        },
        "date": 1793843986361,
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
            "value": 541,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench",
            "value": 383,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench",
            "value": 413,
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
            "value": 291,
            "unit": "opcodes"
          },
          {
            "name": "eq_U512_Bench",
            "value": 395,
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
            "value": 464,
            "unit": "opcodes"
          },
          {
            "name": "sub_U256_Bench",
            "value": 276,
            "unit": "opcodes"
          },
          {
            "name": "sub_U512_Bench",
            "value": 368,
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
          "id": "912451215ccd3dde9817230a3f2417c8d920f0b1",
          "message": "feat!: use exact-width types with a unique representation per value (#2)\n\n* perf: derive `derive_from_seed` values directly from hash bits\n\nAs the modulus is a power of two, a uniformly random value is just the\nlow `MOD_BITS - 1` bits of a random bitstring. Build each limb directly\nfrom 120 bits of a Poseidon2 output instead of sampling `2 * MOD_BITS`\nbits and reducing them through a chain of constrained `mul`/`add` calls.\n\nHash outputs are split with the canonical `std::field::bn254::decompose`\nand range-checked bit splits instead of a full byte decomposition. Each\nlimb uses the same bits [0, 240) of the hash output as before.\n\nCircuit size above the range-table floor of the `derive_from_seed`\nbenchmark drops by 78% for U256 and 87% for U2048.\n\nThe values produced for a given seed change.\n\n* feat!: use exact-width types with a unique representation per value\n\nReplace the `MOD_BITS` parameter (where values were range-checked to\n`MOD_BITS` bits and the modulus was `2^(MOD_BITS - 1)`) with `BITS`, the\nexact width of the type. Values are range-checked to `BITS` bits, so\nevery range-checked value lies in `[0, 2^BITS)` and has exactly one limb\nrepresentation. This removes the concept of non-canonical values:\n\n- `validate_canonical` is removed, as `validate_in_range` now implies it.\n  `udiv_mod`, `/`, `umod`, `from_field` and the byte conversions no\n  longer need it.\n- `eq` is limb-wise equality instead of a constrained subtraction\n  followed by a zero check.\n- `is_zero` and `assert_is_not_zero` only need to check for the all-zero\n  limb vector, and `assert_is_not_equal` no longer needs to account for\n  values differing by the modulus.\n\nCircuit size above the range-table floor drops by 63-73% for `eq`,\n24-30% for `udiv_mod` and `/`, 6-21% for `add`/`sub`/`neg`, and 34-39%\nfor U2048 `from_field`/`to_field`. Byte decoding for U2048 grows by 10\nACIR opcodes (~1%).\n\nThe quotient bound in `evaluate_quadratic_expression` and the static\nproduct-limb bound are unchanged in absolute terms, as the modulus\nitself is unchanged.\n\nBREAKING CHANGE: `derive_bigint` takes the bit width (e.g.\n`#[derive_bigint(3, 256)]` for `U256`), and `BigInt::MOD_BITS` and\n`modulus_bits()` are renamed to `BITS` and `bits()`. Byte conversions\nuse `(BITS + 7) / 8` bytes (32 for `U256`). `modulus()`,\n`validate_canonical`, `unsafe_is_zero_integer`,\n`unsafe_assert_is_not_zero_integer`, `div_unsafe`, `udiv_mod_unsafe`,\n`umod_unsafe` and the `*_bytes_unsafe` conversions are removed.\n\n* fix: range-check the inputs of `eq` and `cmp`\n\n`eq` and the `Equal` case of `cmp` compare limbs directly, which is only\nsound if both inputs are normalised. Values which bypass the `BigInt`\nconstructors, such as circuit inputs, values returned from unconstrained\nfunctions or `from_limbs_unsafe`, may encode the same integer with\ndifferent limbs, e.g. `[2^120, 0, 0]` and `[0, 1, 0]`. Previously\n`assert(a != b)` accepted these, and `cmp` reported one as greater than\nthe other.\n\nRange-check both inputs first. Range checks are deduplicated per value,\nso this adds no constraints when the inputs are already range-checked,\ne.g. the outputs of other operations.\n\n* feat!: infer the number of limbs in `derive_bigint`\n\n`derive_bigint` takes only the bit width, e.g. `#[derive_bigint(256)]`.\nThe number of limbs is read from the struct's `limbs: [u128; N]` field\nand checked to be `ceil(BITS / 120)`, so the two cannot disagree.\n\nWidths whose top limb would hold 0 or more than 118 bits, i.e. where\n`BITS % 120` is 0 or 119, are rejected with an explicit error, as before.\n\nBREAKING CHANGE: `derive_bigint(N, BITS)` is now `derive_bigint(BITS)`.",
          "timestamp": "2026-11-05T10:01:01+08:00",
          "tree_id": "b166e3a1044495754b7c62f1e84b4095d1faa1d6",
          "url": "https://github.com/noir-lang/bigint/commit/912451215ccd3dde9817230a3f2417c8d920f0b1"
        },
        "date": 1793844091226,
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
            "value": 138,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_equal_U256_Bench",
            "value": 96,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_equal_U512_Bench",
            "value": 122,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench",
            "value": 153,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U256_Bench",
            "value": 63,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U512_Bench",
            "value": 75,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U2048_Bench",
            "value": 874,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U256_Bench",
            "value": 288,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U512_Bench",
            "value": 452,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U2048_Bench",
            "value": 536,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench",
            "value": 378,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench",
            "value": 408,
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
            "value": 419,
            "unit": "opcodes"
          },
          {
            "name": "eq_U256_Bench",
            "value": 119,
            "unit": "opcodes"
          },
          {
            "name": "eq_U512_Bench",
            "value": 161,
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
            "value": 441,
            "unit": "opcodes"
          },
          {
            "name": "from_be_bytes_U256_Bench",
            "value": 293,
            "unit": "opcodes"
          },
          {
            "name": "from_be_bytes_U512_Bench",
            "value": 529,
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
            "value": 482,
            "unit": "opcodes"
          },
          {
            "name": "from_le_bytes_U256_Bench",
            "value": 360,
            "unit": "opcodes"
          },
          {
            "name": "from_le_bytes_U512_Bench",
            "value": 596,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U2048_Bench",
            "value": 148,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U256_Bench",
            "value": 58,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U512_Bench",
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
            "value": 464,
            "unit": "opcodes"
          },
          {
            "name": "sub_U256_Bench",
            "value": 276,
            "unit": "opcodes"
          },
          {
            "name": "sub_U512_Bench",
            "value": 368,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U2048_Bench",
            "value": 191,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U256_Bench",
            "value": 201,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U512_Bench",
            "value": 301,
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
            "value": 231,
            "unit": "opcodes"
          },
          {
            "name": "to_le_bytes_U256_Bench",
            "value": 244,
            "unit": "opcodes"
          },
          {
            "name": "to_le_bytes_U512_Bench",
            "value": 344,
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
          "id": "ebad3d486fc284cac91308235eccff1315acda32",
          "message": "chore: move tests into `src/tests.nr` (#14)\n\n`src/tests/` only contained `bigint_test.nr` and a `mod.nr` declaring it, so the tests can live in `src/tests.nr` directly. Test names change from `tests::bigint_test::*` to `tests::*`.",
          "timestamp": "2026-11-05T10:13:35+08:00",
          "tree_id": "23b71cb24840964b1540b49d7210ad2a0cca993e",
          "url": "https://github.com/noir-lang/bigint/commit/ebad3d486fc284cac91308235eccff1315acda32"
        },
        "date": 1793844840410,
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
            "value": 138,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_equal_U256_Bench",
            "value": 96,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_equal_U512_Bench",
            "value": 122,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench",
            "value": 153,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U256_Bench",
            "value": 63,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U512_Bench",
            "value": 75,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U2048_Bench",
            "value": 874,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U256_Bench",
            "value": 288,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U512_Bench",
            "value": 452,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U2048_Bench",
            "value": 536,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench",
            "value": 378,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench",
            "value": 408,
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
            "value": 419,
            "unit": "opcodes"
          },
          {
            "name": "eq_U256_Bench",
            "value": 119,
            "unit": "opcodes"
          },
          {
            "name": "eq_U512_Bench",
            "value": 161,
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
            "value": 441,
            "unit": "opcodes"
          },
          {
            "name": "from_be_bytes_U256_Bench",
            "value": 293,
            "unit": "opcodes"
          },
          {
            "name": "from_be_bytes_U512_Bench",
            "value": 529,
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
            "value": 482,
            "unit": "opcodes"
          },
          {
            "name": "from_le_bytes_U256_Bench",
            "value": 360,
            "unit": "opcodes"
          },
          {
            "name": "from_le_bytes_U512_Bench",
            "value": 596,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U2048_Bench",
            "value": 148,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U256_Bench",
            "value": 58,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U512_Bench",
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
            "value": 464,
            "unit": "opcodes"
          },
          {
            "name": "sub_U256_Bench",
            "value": 276,
            "unit": "opcodes"
          },
          {
            "name": "sub_U512_Bench",
            "value": 368,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U2048_Bench",
            "value": 191,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U256_Bench",
            "value": 201,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U512_Bench",
            "value": 301,
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
            "value": 231,
            "unit": "opcodes"
          },
          {
            "name": "to_le_bytes_U256_Bench",
            "value": 244,
            "unit": "opcodes"
          },
          {
            "name": "to_le_bytes_U512_Bench",
            "value": 344,
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
          "id": "ce4e1c3fb384197c25bef2a7337985d05406faa6",
          "message": "chore: tidy up test-only types and the benchmarks module (#15)\n\n* chore: document test-only types and test `derive_from_seed` masking\n\nExplain which code paths `U252` and `U253` exist to cover, and add a direct test that `derive_from_seed` masks the top limb of a width which is not a multiple of 8, and that its constrained and unconstrained implementations agree.\n\n* chore: move benchmarks into `src/benchmarks.nr`\n\n`src/benchmarks/` only contained `bigint_benchmarks.nr` and a `mod.nr` declaring it. The exported benchmark names are unchanged.",
          "timestamp": "2026-11-05T10:16:59+08:00",
          "tree_id": "47c3a0b377257303eb1f512f1f75c8ebb27ec0c2",
          "url": "https://github.com/noir-lang/bigint/commit/ce4e1c3fb384197c25bef2a7337985d05406faa6"
        },
        "date": 1793845044801,
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
            "value": 138,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_equal_U256_Bench",
            "value": 96,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_equal_U512_Bench",
            "value": 122,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench",
            "value": 153,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U256_Bench",
            "value": 63,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U512_Bench",
            "value": 75,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U2048_Bench",
            "value": 874,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U256_Bench",
            "value": 288,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U512_Bench",
            "value": 452,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U2048_Bench",
            "value": 536,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench",
            "value": 378,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench",
            "value": 408,
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
            "value": 419,
            "unit": "opcodes"
          },
          {
            "name": "eq_U256_Bench",
            "value": 119,
            "unit": "opcodes"
          },
          {
            "name": "eq_U512_Bench",
            "value": 161,
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
            "value": 441,
            "unit": "opcodes"
          },
          {
            "name": "from_be_bytes_U256_Bench",
            "value": 293,
            "unit": "opcodes"
          },
          {
            "name": "from_be_bytes_U512_Bench",
            "value": 529,
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
            "value": 482,
            "unit": "opcodes"
          },
          {
            "name": "from_le_bytes_U256_Bench",
            "value": 360,
            "unit": "opcodes"
          },
          {
            "name": "from_le_bytes_U512_Bench",
            "value": 596,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U2048_Bench",
            "value": 148,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U256_Bench",
            "value": 58,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U512_Bench",
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
            "value": 464,
            "unit": "opcodes"
          },
          {
            "name": "sub_U256_Bench",
            "value": 276,
            "unit": "opcodes"
          },
          {
            "name": "sub_U512_Bench",
            "value": 368,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U2048_Bench",
            "value": 191,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U256_Bench",
            "value": 201,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U512_Bench",
            "value": 301,
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
            "value": 231,
            "unit": "opcodes"
          },
          {
            "name": "to_le_bytes_U256_Bench",
            "value": 244,
            "unit": "opcodes"
          },
          {
            "name": "to_le_bytes_U512_Bench",
            "value": 344,
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
          "id": "b55cbd253ee9879a7a9b9279b5ffde8d365fa790",
          "message": "chore: move test-only `TWO_POW_60` into the `msb` tests (#12)\n\n`TWO_POW_60` is only used by the reference 64-bit implementation in the tests of `utils/msb.nr`.",
          "timestamp": "2026-11-05T10:18:30+08:00",
          "tree_id": "4e6696cdc3d2bd5deeef32734630228967562c56",
          "url": "https://github.com/noir-lang/bigint/commit/b55cbd253ee9879a7a9b9279b5ffde8d365fa790"
        },
        "date": 1793845136963,
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
            "value": 138,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_equal_U256_Bench",
            "value": 96,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_equal_U512_Bench",
            "value": 122,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U2048_Bench",
            "value": 153,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U256_Bench",
            "value": 63,
            "unit": "opcodes"
          },
          {
            "name": "assert_is_not_zero_U512_Bench",
            "value": 75,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U2048_Bench",
            "value": 874,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U256_Bench",
            "value": 288,
            "unit": "opcodes"
          },
          {
            "name": "cmp_U512_Bench",
            "value": 452,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U2048_Bench",
            "value": 536,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U256_Bench",
            "value": 378,
            "unit": "opcodes"
          },
          {
            "name": "derive_from_seed_13_elements_U512_Bench",
            "value": 408,
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
            "value": 419,
            "unit": "opcodes"
          },
          {
            "name": "eq_U256_Bench",
            "value": 119,
            "unit": "opcodes"
          },
          {
            "name": "eq_U512_Bench",
            "value": 161,
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
            "value": 441,
            "unit": "opcodes"
          },
          {
            "name": "from_be_bytes_U256_Bench",
            "value": 293,
            "unit": "opcodes"
          },
          {
            "name": "from_be_bytes_U512_Bench",
            "value": 529,
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
            "value": 482,
            "unit": "opcodes"
          },
          {
            "name": "from_le_bytes_U256_Bench",
            "value": 360,
            "unit": "opcodes"
          },
          {
            "name": "from_le_bytes_U512_Bench",
            "value": 596,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U2048_Bench",
            "value": 148,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U256_Bench",
            "value": 58,
            "unit": "opcodes"
          },
          {
            "name": "is_zero_U512_Bench",
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
            "value": 464,
            "unit": "opcodes"
          },
          {
            "name": "sub_U256_Bench",
            "value": 276,
            "unit": "opcodes"
          },
          {
            "name": "sub_U512_Bench",
            "value": 368,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U2048_Bench",
            "value": 191,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U256_Bench",
            "value": 201,
            "unit": "opcodes"
          },
          {
            "name": "to_be_bytes_U512_Bench",
            "value": 301,
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
            "value": 231,
            "unit": "opcodes"
          },
          {
            "name": "to_le_bytes_U256_Bench",
            "value": 244,
            "unit": "opcodes"
          },
          {
            "name": "to_le_bytes_U512_Bench",
            "value": 344,
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