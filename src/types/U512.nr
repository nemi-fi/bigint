use crate::bigint::BigInt;
use crate::bigint::derive_bigint;
use crate::params::BigIntParams;

pub global U512_PARAMS: BigIntParams<5, 513> = BigIntParams {
    modulus: [0x00, 0x00, 0x00, 0x00, 0x0100000000],
    double_modulus: [
        0x01000000000000000000000000000000,
        0xffffffffffffffffffffffffffffff,
        0xffffffffffffffffffffffffffffff,
        0xffffffffffffffffffffffffffffff,
        0x01ffffffff,
    ],
    redc_param: [0x00, 0x00, 0x00, 0x00, 0x010000000000],
};

#[derive_bigint(5, 513, quote { U512_PARAMS })]
pub struct U512 {
    limbs: [u128; 5],
}
