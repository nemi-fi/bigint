use crate::bigint::BigInt;
use crate::bigint::derive_bigint;

/// An unsigned 768-bit integer.
#[derive_bigint(7, 769)]
pub struct U768 {
    limbs: [u128; 7],
}
