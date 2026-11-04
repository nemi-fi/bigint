use crate::bigint::BigInt;
use crate::bigint::derive_bigint;
use crate::params::BigIntParams;

pub global U384_PARAMS: BigIntParams<4, 385> = BigIntParams {
    modulus: [0x00, 0x00, 0x00, 0x01000000],
    double_modulus: [
        0x01000000000000000000000000000000,
        0xffffffffffffffffffffffffffffff,
        0xffffffffffffffffffffffffffffff,
        0x01ffffff,
    ],
    redc_param: [0x00, 0x00, 0x00, 0x0100000000],
};

#[derive_bigint(4, 385, quote { U384_PARAMS })]
pub struct U384 {
    limbs: [u128; 4],
}
