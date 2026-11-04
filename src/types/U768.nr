use crate::bigint::BigInt;
use crate::bigint::derive_bigint;
use crate::params::BigIntParams;

pub global U768_PARAMS: BigIntParams<7, 769> = BigIntParams {
    modulus: [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01000000000000],
    double_modulus: [
        0x01000000000000000000000000000000,
        0xffffffffffffffffffffffffffffff,
        0xffffffffffffffffffffffffffffff,
        0xffffffffffffffffffffffffffffff,
        0xffffffffffffffffffffffffffffff,
        0xffffffffffffffffffffffffffffff,
        0x01ffffffffffff,
    ],
    redc_param: [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0100000000000000],
};

#[derive_bigint(7, 769, quote { U768_PARAMS })]
pub struct U768 {
    limbs: [u128; 7],
}
