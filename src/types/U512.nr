use crate::bigint::BigInt;
use crate::bigint::derive_bigint;

/// An unsigned 512-bit integer.
#[derive_bigint(512)]
pub struct U512 {
    limbs: [u128; 5],
}
