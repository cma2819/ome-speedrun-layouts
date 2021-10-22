import { BundleNodecgInstance, BundleNodecgConstructor } from '../nodecg/nodecg';
import { SpeedcontrolConstructor, SpeedcontrolInstance } from '../nodecg/speedcontrol';

declare global {
  const nodecg: BundleNodecgInstance & SpeedcontrolInstance

  const NodeCG: BundleNodecgConstructor & SpeedcontrolConstructor;
}