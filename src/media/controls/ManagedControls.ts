import {
  ManagedElement,
  ManagedElementConnectEvent
} from '@base/elements/index';
import { ReactiveElement } from 'lit';

/**
 * Fired when connecting a new controls manager with the `MediaControllerElement`.
 *
 * @bubbles
 * @composed
 */
export class ManagedControlsConnectEvent extends ManagedElementConnectEvent<ReactiveElement> {
  static override readonly TYPE = 'vds-managed-controls-connect';
}

export class ManagedControls extends ManagedElement<ReactiveElement> {
  protected static override get _ScopedDiscoveryEvent() {
    return ManagedControlsConnectEvent;
  }
}
