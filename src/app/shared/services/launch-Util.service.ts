import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LaunchUtilService {
  getLaunchStatusColor(status: string): string {
    switch (status?.toLowerCase()) {
      case 'go':
      case 'success':
        return 'success';

      case 'tbc':
      case 'tbd':
        return 'primary';
      case 'failure':
      case 'partial failure':
        return 'danger';
      case 'hold':
      case 'in flight':
        return 'warning';
      default:
        return 'primary';
    }
  }
}
