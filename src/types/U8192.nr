use crate::bigint::BigInt;
use crate::bigint::derive_bigint;

/// An unsigned 8192-bit integer.
#[derive_bigint(69, 8193)]
pub struct U8192 {
    limbs: [u128; 69],
}
