package com.recordzekr.app;

import android.os.Bundle;
import android.widget.Toast;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.messaging.FirebaseMessaging;

import androidx.annotation.NonNull;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});

    FirebaseMessaging.getInstance().subscribeToTopic("all")
      .addOnCompleteListener(new OnCompleteListener<Void>() {
        @Override
        public void onComplete(@NonNull Task<Void> task) {
          String msg = getString(R.string.msg_subscribed);
          if (!task.isSuccessful()) {
            msg = getString(R.string.msg_subscribe_failed);
          }
         // Log.d(TAG, msg);
          //Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
        }
      });


  }
}
