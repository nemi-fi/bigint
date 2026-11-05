use crate::bigint::BigInt;
use crate::bigint::derive_bigint;

/// An unsigned 4096-bit integer.
#[derive_bigint(4096)]
pub struct U4096 {
    limbs: [u128; 35],
}
