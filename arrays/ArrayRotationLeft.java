import java.util.*;

public class ArrayRotationLeft {
    public static void main(String[] args) {
         int[] arr = {1, 2, 3, 4, 5};
        ArrayRotationLeft s=new ArrayRotationLeft();
         s.brute(arr,2);
         //s.better(arr,2);
         s.optimal(arr,2);
}
    void brute(int[] arr, int k) {
        int n = arr.length;
        for (int i = 0; i < k; i++) {
            int first = arr[0];
            for (int j = 0; j < n - 1; j++)
                arr[j] = arr[j + 1];
            arr[n - 1] = first;
        }
        System.out.println(Arrays.toString(arr));
    }

    // void better(int arr[],int k){
    //     k=k%arr.length;
    //     int temp[]=new int[arr.length];
    //     for(int i=0;i<arr.length;i++){
    //         temp[i]=arr[k+i];
    //     }
    //     for(int i=0;i<k;i++){
    //         temp[k-arr.length-i]=arr[i];
    //     }
    //     for(int i=0;i<arr.length;i++){
    //         arr[i]=temp[i];
    //     }
    //     System.out.println(Arrays.toString(arr));
    // }

    void optimal(int[] arr, int k) {
        k=k%arr.length;
        reverse(arr, 0, k - 1);
        reverse(arr, k, arr.length - 1);
        reverse(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }

    void reverse(int[] arr, int l, int r) {
        while (l < r) {
            int t = arr[l];
            arr[l] = arr[r];
            arr[r] = t;
            l++;
            r--;
        }
    }
}
