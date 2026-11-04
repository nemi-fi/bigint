use crate::bigint::BigInt;
use crate::bigint::derive_bigint;
use crate::params::BigIntParams;

pub global U256_PARAMS: BigIntParams<3, 257> = BigIntParams {
    modulus: [0x00, 0x00, 0x010000],
    double_modulus: [
        0x01000000000000000000000000000000,
        0xffffffffffffffffffffffffffffff,
        0x01ffff,
    ],
    redc_param: [0x00, 0x00, 0x01000000],
};

#[derive_bigint(3, 257, quote { U256_PARAMS })]
pub struct U256 {
    limbs: [u128; 3],
}
